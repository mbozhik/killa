"use client";

import { CONFIG } from "@/lib/config";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NftCard from "@/components/NftCard";

import miniLogo from "%%/mini-logo.svg";
import charactersAnimation from "%%/loader.gif";
import { Minus, Plus } from "lucide-react";
import { whitelist } from "@/lib/constants";

import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { vip } from "@/lib/vip";
import { wl } from "@/lib/wl";

const MINT_DATA = {
  day: {
    date: "JANUARY 19",
    time: "9PM UTC",
  },
  schedule: {
    1: {
      mint: "VIP Mint",
      price: "Price: 11 SUI",
      wallet: "Max Mint Per Wallet: 2",
      startDate: 1737320400000,
    },
    2: {
      mint: "Whitelist Mint",
      price: "Price: 14 SUI",
      wallet: "Max Mint Per Wallet: 4",
      startDate: 1737320400000,
    },
    3: {
      mint: "Public Mint",
      price: "Price: 18 SUI",
      wallet: "Max Mint Per Wallet: 10",
      startDate: 1737345600000,
    },
  },
  text: "Click the Withdraw SUI button to bring up your Killa Club collection. If your Killa holds a balance of SUI - congratulations, you won the token-bound mint! Click withdraw to claim your SUI.",
};

const StyledConnectButton = () => (
  <div
    className={cn(
      "col-span-3  w-full items-center flex justify-end mt-2",
      "[&>button]:text-lg [&>button]:!text-white [&>button]:font-medium [&>button]:bg-custom-primary [&>button]:w-full [&>button]:py-4 [&>button]:rounded-lg [&>button]:hover:bg-custom-primary/80 [&>button]:duration-300"
    )}
  >
    <ConnectButton />
  </div>
);

interface IMintNftData {
  id: {
    id: string;
  }; // Unique identifier for the NFT object
  name: string; // Name of the NFT
  description: string; // Description of the NFT
  image_url: string; // URL to the image of the NFT
  metadata_uri: string; // URL to the metadata JSON file
  sui_balance: string; // SUI balance associated with this NFT (if applicable)
  token_id: string; // Token ID of the NFT
}

export default function MintPage() {
  const [mintAmount, setMintAmount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mintedTokens, setMintedTokens] = useState(0);
  const [mintNftData, setMintNftData] = useState<IMintNftData[]>([]);
  const { currentAccount, signAndExecuteTransactionBlock, isConnected } =
    useWalletKit();

  const client = new SuiClient({ url: getFullnodeUrl("mainnet") });

  const customHeight = "h-[100svh] h-[100vh] sm:h-auto";
  const customPaddingBottom = "sm:!mb-[10svh] sm:mb-[10vh]";
  const buttonStyles =
    "self-center w-full px-10 py-4 sm:py-3.5 text-center text-lg font-medium font-sans text-white bg-custom-primary rounded-md tracking-tighter duration-200 hover:bg-custom-primary/85";

  useEffect(() => {
    const interval = setInterval(async () => {
      const {
        data: { content },
      }: any = await client.getObject({
        id: CONFIG.COLLECTION_DATA_ID,
        options: {
          showContent: true,
        },
      });

      if (!content.fields) return setMintedTokens(0);

      return setMintedTokens(content.fields.total_minted);
    }, 2000);

    return () => clearInterval(interval); // Limpa o intervalo na desmontagem
  }, []);

  const handleAddPrizePool = useCallback(async () => {
    if (!currentAccount) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const tx = new TransactionBlock();

      // Instead of storing the split coin result, pass it directly
      tx.moveCall({
        target: `${CONFIG.PACKAGE_ID}::nft::add_prize_pool`,
        arguments: [
          tx.object(
            "0x4c7321a4884673c195ad2b564922b212592e4e903ede5db12264303a1681f47d"
          ),
          tx.object(CONFIG.COLLECTION_DATA_ID),
          tx.gas, // Use tx.gas directly like in the working version
          tx.pure("5000000000"),
        ],
      });

      tx.setGasBudget(200000000);

      const response = await signAndExecuteTransactionBlock({
        transactionBlock: tx as any,
        options: {
          showEffects: true,
          showEvents: true,
        },
      });

      console.log("Mint successful:", response);

      if (response.effects.status.status !== "failure") {
        setSuccess(true);
        setError(null);
      } else {
        setError("Mint failed");
        setSuccess(false);
      }
    } catch (err) {
      console.error("Mint failed:", err);
      setError(err instanceof Error ? err.message : "Mint failed");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [currentAccount, mintAmount]);

  const handleWithdraw = useCallback(async () => {
    if (!currentAccount) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const tx = new TransactionBlock();

      // Instead of storing the split coin result, pass it directly
      tx.moveCall({
        target: `${CONFIG.PACKAGE_ID}::nft::withdraw_sui`,
        arguments: [
          tx.object(
            "0xa38f626c6d954c7716b9e6de4e4f71d6bbac32d7077461b1cde677485c397fb7"
          ),
          tx.pure("1000000000"),
        ],
      });

      tx.setGasBudget(200000000);

      const response = await signAndExecuteTransactionBlock({
        transactionBlock: tx as any,
        options: {
          showEffects: true,
          showEvents: true,
        },
      });

      console.log("Mint successful:", response);

      if (response.effects.status.status !== "failure") {
        setSuccess(true);
        setError(null);
      } else {
        setError("Mint failed");
        setSuccess(false);
      }
    } catch (err) {
      console.error("Mint failed:", err);
      setError(err instanceof Error ? err.message : "Mint failed");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [currentAccount, mintAmount]);

  const fetchNfts = useCallback(async () => {
    if (!currentAccount) {
      setError("Please enter a valid wallet address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const objects = await client.getOwnedObjects({
        owner: currentAccount.address,
        filter: {
          MoveModule: {
            module: "nft",
            package:
              "0xc4f793bda2ce1db8a0626b5d3e189680bf7b17559bfe8389cd9db10d4e4d61dc",
          },
        },
      });
      const ids = objects.data.map((object) => object.data.objectId);

      const details: any = await client.multiGetObjects({
        ids,
        options: {
          showContent: true,
        },
      });

      const fields = details.map((item) => item.data.content.fields);

      setMintNftData(fields);
    } catch (err) {
      console.error("Error fetching NFTs:", err);
    } finally {
      setLoading(false);
    }
  }, [currentAccount]);

  useEffect(() => {
    if (currentAccount) {
      fetchNfts();
    }
  }, [currentAccount, fetchNfts]);

  return (
    <section
      className={`grid justify-end items-center w-[85vw] xl:w-[90vw] sm:w-screen mx-auto sm:p-5 ${customPaddingBottom} ${customHeight}`}
    >
      <div className="justify-self-end grid grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-center w-[65%] xl:w-[70%] sm:w-full p-3 sm:p-3.5 sm:pb-5 sm:gap-5 bg-white/50 backdrop-blur-sm rounded-xl">
        <div className="flex flex-col justify-between h-full pl-2 pt-2 xl:gap-5 sm:gap-3.5 sm:pl-0 sm:pt-0">
          <div className="flex items-center justify-between gap-3 sm:pl-2 sm:pb-1">
            <Image
              className="w-[4vw] sm:w-[12vw]"
              src={miniLogo}
              alt="Killa Club Logo"
            />

            <div className="pt-3 sm:pt-0 text-3xl xl:text-2xl sm:text-xl font-medium text-custom-primary !leading-[1.1] text-right">
              <h3>{MINT_DATA.day.date}</h3>
              <h3>{MINT_DATA.day.time}</h3>
            </div>
          </div>

          <div className="space-y-4 tracking-tight">
            <div className="space-y-2.5">
              {Object.entries(MINT_DATA.schedule).map(
                ([key, { mint, price, wallet, startDate }]) => {
                  const currentTime = Date.now();
                  const isActive = startDate < currentTime;

                  return (
                    <div
                      key={key}
                      className={`flex flex-col gap-0.5 xl:gap-0 items-center border-2 border-custom-primary rounded-md px-3 py-2 sm:py-3 bg-custom-primary/10 duration-300 hover:scale-[0.97] ${
                        isActive ? "" : "opacity-40"
                      }`}
                    >
                      <h3 className="text-xl font-semibold xl:text-lg text-custom-primary">
                        Phase {key} - {mint}
                      </h3>

                      <div className="flex flex-col items-center -space-y-1 text-base xl:text-sm xl:space-y-0">
                        <p>{price}</p>
                        <p>{wallet}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <p className="text-base xl:text-sm text-center !leading-[1.2]">
              {MINT_DATA.text}
            </p>
          </div>

          <Dialog>
            <DialogTrigger>
              <div className={cn(buttonStyles, "")}>Withdraw SUI</div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Withdraw SUI (?)</DialogTitle>
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="p-3 text-sm text-green-600 bg-green-100 rounded-md">
                    Successfully withdraw!
                  </div>
                )}
              </DialogHeader>

              <div className="grid grid-cols-3 gap-x-2 gap-y-3 w-full">
                {mintNftData.length > 0 &&
                  mintNftData.map((nft) => (
                    <NftCard
                      key={nft.id.id}
                      id={nft.id.id}
                      sui_balance={nft.sui_balance}
                      image={nft.image_url}
                      name={nft.name}
                      balance={nft.sui_balance}
                      setError={setError}
                      setLoading={setLoading}
                      setSuccess={setSuccess}
                    />
                  ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col justify-between w-full h-full gap-5">
          <Image
            className="rounded-md"
            src={charactersAnimation}
            alt="Characters Animation"
          />

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 text-sm text-green-600 bg-green-100 rounded-md">
              Successfully minted {mintAmount} NFT{mintAmount > 1 ? "s" : ""}!
            </div>
          )}

          <div className="space-y-2">
            <p className="text-lg xl:text-base">
              {mintedTokens <= 2222 && mintedTokens} / 2222{"  "}
            </p>
            {/* make it dynamic */}
            <div className="grid grid-cols-1  gap-2 sm:flex sm:flex-col sm:gap-3">
              <div className="col-span-2 px-2.5 flex items-center justify-between border-2 border-custom-primary rounded-md">
                <button
                  onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
                  disabled={loading}
                >
                  <Minus className="text-custom-primary" />
                </button>
                <span className="px-1.5 text-custom-primary py-0 sm:py-1.5 text-2xl font-book">
                  {mintAmount}
                </span>
                <button
                  onClick={() =>
                    setMintAmount(
                      Math.min(CONFIG.MAX_MINT_PER_TX, mintAmount + 1)
                    )
                  }
                  disabled={loading}
                >
                  <Plus className="text-custom-primary" />
                </button>
              </div>

              {isConnected && whitelist.includes(currentAccount?.address) && (
                <div
                  className={cn("flex flex-col items-center justify-center")}
                >

                  <button
                    onClick={() => {}}
                    className={cn(
                      buttonStyles,
                      "disabled:opacity-50 bg-red-400 w-80",
                      ""
                    )}
                  >
                    SOLD OUT
                  </button>
                  <button
                    onClick={() => {}}
                    disabled
                    className={cn(buttonStyles, "disabled:opacity-50 mt-2", "")}
                  >
                    Mint
                  </button>
                </div>
              )}

              {isConnected && !whitelist.includes(currentAccount?.address) && (
                <div
                  className={cn("flex flex-col items-center justify-center")}
                >
                  <button
                    onClick={() => {}}
                    className={cn(
                      buttonStyles,
                      "disabled:opacity-50 bg-red-400",
                      ""
                    )}
                  >
                    Not eligible for whitelisted phases
                  </button>
                  <button
                    onClick={() => {}}
                    disabled
                    className={cn(buttonStyles, "disabled:opacity-50 mt-2", "")}
                  >
                    Mint
                  </button>
                </div>
              )}
              <StyledConnectButton />
            </div>
            {/* <div className="text-sm text-center text-gray-600">Total Cost: {((Number(CONFIG.MINT_PRICE) * mintAmount) / 1_000_000_000).toFixed(1)} SUI</div> */}
          </div>
        </div>
      </div>

      <div
        className={`absolute sm:fixed inset-0 w-screen ${customHeight} overflow-hidden -z-10`}
      >
        <video className="object-cover w-full h-full" autoPlay muted loop>
          <source src="/mint-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
