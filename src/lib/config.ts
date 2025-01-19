export const CONFIG = {
  PACKAGE_ID: '0xc4f793bda2ce1db8a0626b5d3e189680bf7b17559bfe8389cd9db10d4e4d61dc', // Current Testnet SC Package Object ID
  COLLECTION_DATA_ID: '0x5e9ddeb7a3a7d9da83b681bfbe003dcd3ee3b99ea0c72310ffdc6894f826c14b', // Corresponding CD Object ID
  CLOCK_ID: '0x6',
  PUBLIC_MINT_PRICE: BigInt(18_000_000_000), // 0.1 SUI
  WHITELIST_MINT_PRICE: BigInt(14_000_000_000), // 0.1 SUI
  VIP_MINT_PRICE: BigInt(11_000_000_000), // 0.1 SUI
  MAX_MINT_PER_TX: 10,
} as const
