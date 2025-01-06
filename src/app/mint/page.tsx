'use client'

import {CONFIG} from '@/lib/config'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {ConnectButton, useWalletKit} from '@mysten/wallet-kit'
import {TransactionBlock} from '@mysten/sui.js/transactions'

import Link from 'next/link'
import Image from 'next/image'

import miniLogo from '%%/mini-logo.svg'
import charactersAnimation from '%%/loader.gif'
import {Minus, Plus} from 'lucide-react'

const mintData = {
  1: {
    mint: 'VIP Mint',
    price: 'Price: 12 SUI',
    wallet: 'Maximum of 2 mints per wallet',
  },
  2: {
    mint: 'Whitelist Mint',
    price: 'Price: 14 SUI',
    wallet: 'Max 4 mints per wallet',
  },
  3: {
    mint: 'Public Mint',
    price: 'Price: 18 SUI',
    wallet: 'Max 10 mints per wallet',
  },
}

const mintText = 'You have the chance to win SUI alongside your Killa Club NFT thanks to our Token-Bound mint mechanism! The more you mint, the higher your multiplier. If the Withdraw SUI button turns on, this means you have won some SUI. Good luck, Hunter’s.'

const StyledConnectButton = () => (
  <div className={cn('col-span-3 w-full', '[&>button]:text-lg [&>button]:font-medium [&>button]:bg-custom-primary [&>button]:w-full [&>button]:py-4 [&>button]:rounded-lg [&>button]:hover:bg-custom-primary/80 [&>button]:duration-300')}>
    <ConnectButton />
  </div>
)

export default function MintPage() {
  const [mintAmount, setMintAmount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const {currentAccount, signAndExecuteTransactionBlock} = useWalletKit()

  const customHeight = 'h-[100svh] h-[100vh] sm:h-auto'
  const customPaddingBottom = 'sm:!mb-[10svh] sm:mb-[10vh]'
  const buttonStyles = 'px-8 py-2.5 text-white sm:text-sm sm:font-normal tracking-normal duration-200 rounded-md w-fit bg-custom-primary hover:bg-custom-primary/85'

  const handleMint = async () => {
    if (!currentAccount) return

    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      const tx = new TransactionBlock()

      tx.moveCall({
        target: `${CONFIG.PACKAGE_ID}::nft::mint_multiple`,
        arguments: [tx.gas, tx.object(CONFIG.COLLECTION_DATA_ID), tx.pure(mintAmount), tx.object(CONFIG.CLOCK_ID)],
      })

      tx.setGasBudget(200000000)

      const response = await signAndExecuteTransactionBlock({
        transactionBlock: tx as any,
        options: {
          showEffects: true,
          showEvents: true,
        },
      })

      console.log('Mint successful:', response)
      setSuccess(true)
      setError(null)
    } catch (err) {
      console.error('Mint failed:', err)
      setError(err instanceof Error ? err.message : 'Mint failed')
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`grid justify-end items-center w-[85vw] sm:w-screen mx-auto sm:p-5 ${customPaddingBottom} ${customHeight}`}>
      <div className="justify-self-end grid grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-center w-[65%] xl:w-[75%] sm:w-full p-3 sm:py-5 sm:gap-7 bg-white/50 backdrop-blur-sm rounded-xl">
        <div className="flex flex-col justify-between h-full gap-5 pl-2 sm:pl-0">
          <Image className="self-center w-[4vw] sm:w-[10vw]" src={miniLogo} alt="Killa Club Logo" />

          <div className="space-y-4">
            <div className="space-y-2.5">
              {Object.entries(mintData).map(([key, {mint, price, wallet}]) => (
                <div key={key} className={`flex flex-col items-center gap-0.5 border-2 border-custom-primary rounded-md px-3 py-2 bg-custom-primary/10 ${key == '1' ? '' : 'opacity-40'}`}>
                  <h3 className="font-semibold">
                    Phase {key} - {mint}
                  </h3>

                  <p className="text-sm">{price}</p>
                  <p className="text-sm">{wallet}</p>
                </div>
              ))}
            </div>

            <p className="text-lg xl:text-base">{mintText}</p>
          </div>

          <Link href="/" target="_blank" className={cn(buttonStyles, 'py-4 text-base font-medium self-center sm:w-full sm:text-center')}>
            Withdraw SUI
          </Link>
        </div>

        <div className="flex flex-col w-full gap-5 justify-between h-full">
          <Image className="rounded-md" src={charactersAnimation} alt="Characters Animation" />

          {error && <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">{error}</div>}

          {success && (
            <div className="p-3 text-sm text-green-600 bg-green-100 rounded-md">
              Successfully minted {mintAmount} NFT{mintAmount > 1 ? 's' : ''}!
            </div>
          )}

          <div className="space-y-3">
            <p className="text-lg xl:text-base">Select mint amount right now</p>

            <div className="grid grid-cols-5 gap-2 sm:grid-cols-1 sm:gap-3">
              <div className="col-span-2 px-2.5 flex items-center justify-between border-2 border-custom-primary rounded-md">
                <button onClick={() => setMintAmount(Math.max(1, mintAmount - 1))} disabled={loading}>
                  <Minus className="text-custom-primary" />
                </button>
                <span className="px-1.5 text-custom-primary py-0 text-2xl font-book">{mintAmount}</span>
                <button onClick={() => setMintAmount(Math.min(CONFIG.MAX_MINT_PER_TX, mintAmount + 1))} disabled={loading}>
                  <Plus className="text-custom-primary" />
                </button>
              </div>

              {currentAccount ? (
                <button onClick={handleMint} disabled={loading} className="w-full px-8 py-2.5 text-white bg-custom-primary rounded-md hover:bg-custom-primary/85 transition-colors disabled:opacity-50">
                  {loading ? 'Minting...' : 'Mint Now'}
                </button>
              ) : (
                <StyledConnectButton />
              )}
            </div>

            {/* <div className="text-center text-sm text-gray-600">Total Cost: {((Number(CONFIG.MINT_PRICE) * mintAmount) / 1_000_000_000).toFixed(1)} SUI</div> */}
          </div>
        </div>
      </div>

      <div className={`absolute sm:fixed inset-0 w-screen ${customHeight} overflow-hidden -z-10`}>
        <video className="object-cover w-full h-full" autoPlay muted loop>
          <source src="/mint-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
