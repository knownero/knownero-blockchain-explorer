var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 2,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 30, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'KNOW',
    openAliasPrefix: "KNOW",
    coinName: 'Knownero',
    coinUriPrefix: 'knownero:',
    addressPrefix: 64,
    integratedAddressPrefix: 65,
    subAddressPrefix: 464,
    addressPrefixTestnet: 64,
    integratedAddressPrefixTestnet: 65,
    subAddressPrefixTestnet: 464,
    addressPrefixStagenet: 64,
    integratedAddressPrefixStagenet: 65,
    subAddressPrefixStagenet: 464,
    feePerKB: new JSBigInt('1'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 4, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 60,
    debugMode: false
};
