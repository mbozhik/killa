export const CONFIG = {
    PACKAGE_ID: "0xb7bda6b6a1c68a331cd797d6b78aaecebbad710a79321314321eca7797db99ad", // Current Testnet SC Package Object ID
    COLLECTION_DATA_ID: "0x0dfff5286d06159c63231a40f1b2f560218ce1fb40b0d3cbd8bdb557d8bf74ca", // Corresponding CD Object ID
    CLOCK_ID: "0x6",
    MINT_PRICE: BigInt(100_000_000), // 0.1 SUI
    MAX_MINT_PER_TX: 10
  } as const;