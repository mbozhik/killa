import { useWalletKit } from "@mysten/wallet-kit";
import Image from "next/image";
import { useCallback } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CONFIG } from "@/lib/config";

type Props = {
  id: string;
  sui_balance: string;
  image: string;
  name: string;
  balance: string;
  setLoading: any;
  setError: any;
  setSuccess: any;
};

export default function NftCard({
  image,
  name,
  balance,
  id,
  sui_balance,
  setError,
  setLoading, 
  setSuccess
}: Props) {
  const { currentAccount, signAndExecuteTransactionBlock, isConnected } =
    useWalletKit();

  const handleWithdraw = useCallback(
    async (id: string, sui_balance: string) => {
      if (!currentAccount) return;
      if (Number(sui_balance) <= 0) return;

      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const tx = new TransactionBlock();

        tx.moveCall({
          target: `${CONFIG.PACKAGE_ID}::nft::withdraw_sui`,
          arguments: [tx.object(id), tx.pure(sui_balance)],
        });

        tx.setGasBudget(200000000);

        const response = await signAndExecuteTransactionBlock({
          transactionBlock: tx as any,
          options: {
            showEffects: true,
            showEvents: true,
          },
        });

        console.log("Withdraw successful:", response);

        if (response.effects.status.status !== "failure") {
          setSuccess(true);
          setError(null);
        } else {
          setError("Withdraw failed");
          setSuccess(false);
        }
      } catch (err) {
        console.error("Withdraw failed:", err);
        setError(err instanceof Error ? err.message : "Withdraw failed");
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    },
    [currentAccount]
  );
  return (
    <div
      onClick={() => handleWithdraw(id, sui_balance)}
      className="space-y-2 border border-neutral-300 rounded-lg p-2 bg-white cursor-pointer hover:bg-gray-200"
    >
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
        width={500}
        height={500}
      />

      <div>
        <h3 className="text-lg font-semibold text-custom-primary">{name}</h3>
        <p className="text-neutral-600 font-medium">
          Balance:{" "}
          <span className="font-bold text-custom-black">
            {(Number(balance) / 1000000000).toFixed(2)} SUI
          </span>
        </p>
      </div>
    </div>
  );
}
