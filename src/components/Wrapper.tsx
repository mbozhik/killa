'use client'

import {cn} from '@/lib/utils'
import {WalletKitProvider} from '@mysten/wallet-kit'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({children, className}: Props) {
  return (
    <WalletKitProvider>
      <main className={cn('relative overflow-x-hidden tracking-tighter', className)}>{children}</main>
    </WalletKitProvider>
  )
}
