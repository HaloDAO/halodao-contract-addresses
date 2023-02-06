import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xB32EcEb4f6B5e840Fe0e4ff127D7761D13a4C092',
  XSGD: '0xb4a183d38F754D83AA97810D80FC5BaCCd5c8441',
  EURS: '0x2b1c6c85a1dB4b5CF9C4d4662d0556E5daBcf626',
}

const fxPools = {
  LP_XSGD_USDC: '0x5886F7BFCC5D61CD4Ad0DC34e72DEFa2c85dE104',
  LP_EURS_USDC: '0x1fbA91Ce46d2453e2d461b1a0FcF76588a07fE41'
}

const fxPoolIds = {
  XSGD_USDC:
    '0x5886f7bfcc5d61cd4ad0dc34e72defa2c85de1040002000000000000000002e9',
  EURS_USDC:
    '0x1fba91ce46d2453e2d461b1a0fcf76588a07fe410002000000000000000003af'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: '0x4f2157aE2661e4312B8F2E458705fA5a9aeb3D46',
    RNBW: ZERO_ADDRESS,
    xRNBW: ZERO_ADDRESS
  },
  rewards: {
    ammRewards: ZERO_ADDRESS,
    rewardsManager: ZERO_ADDRESS,
    epochManager: ZERO_ADDRESS
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC,
          poolId: fxPoolIds.XSGD_USDC
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: fxPoolIds.EURS_USDC
        }
      ],
      disabled: []
    },
    fxPoolFactory: '0x13841C45274c68002F6D0cb0a40Ae7faa54e7e57',
    proportionalLiquidity: '0x7bC633DA66EBD9A5E44293D8A71e094aFd78c5D6',
    assimilatorFactory: '0xbd02F2F69B8D79CD2566b6e425Ba2810ca5C2743',
    swapLibrary: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
    oracles: {
      USDC: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7',
      XSGD: '0x4fbc1dFfd80F197CF99FAeDa8f7Bcae0Ebea4d81',
      EURS: '0x21420f2Fa4082d4Bf023698bB574F7D510345260',
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x4D7e44c5262B61817cA7bDD8E0Bd5748C5890131',
      lendingPoolAddressesProviderRegistry:
        '0x651a4C20f46F29CaC490A12111CfD76bab4EfE39',
      reserveLogic: '0x04a12215189F3aeEd6D04DE8b9d0AEf839CE7764',
      genericLogic: '0x609208B2E016fB4B61C0191beEAfF73e2CafCF1E',
      validationLogic: '0xFc8A694B1d44e52b85FC13032264dc9029183dF9',
      lendingPoolImpl: '0x8091396CD0808CB1a21e95Cb4F47613b8a367682',
      lendingPool: '0x6af3B5f7d7f4BE05C3dF360A3b573A7FB93E719B',
      lendingPoolProxy: '0x6af3B5f7d7f4BE05C3dF360A3b573A7FB93E719B',
      lendingPoolConfiguratorImpl: '0x8F8791d44dcad03fec2995482CDfA9C69784f31c',
      lendingPoolConfigurator: '0x497fD821B014880c575aC98A23d9926f5148800E',
      stableAndVariableTokensHelper:
        '0x34305916713a0F9070f51dBcf5db945c4A3Ee48c',
      aTokensAndRatesHelper: '0xE3C2280f8d1af58443b487040521a9D923d6fda5',
      aaveOracle: '0x5d82ae79F6AF94C0159abf44034a2295aDd5C749',
      lendingRateOracle: '0xF403e0dD1A955f72eA8c9b6998D375f66C9E0957',
      aaveProtocolDataProvider: '0x79D52081eCa24468fe471b22c763bdbFf02FAC3c',
      stableDebtToken: '0x10eF9F05455bf85683f032E5f79301bBE7e40758',
      variableDebtToken: '0x87B2418E4DFEC74Bcba9453C7C8e63c6FA7E350b',
      aToken: '0x5533a2e3Db531a89b25D1ed3c6a1Baa584eEc319',
      defaultReserveInterestRateStrategy:
        '0x890D23Be36B81a1388FeCF3ca0FBC05709eD90a2',
      wethGateway: '0x7CcA8EBFac13a6176C49369727e2Eb0a8c95812e',
      lendingPoolCollateralManager:
        '0x6cdb26b79716eE42944dfA1B6a9D90b56bc16B6B',
      walletBalanceProvider: '0xED0506376035b1E1d84a8fc345D91800F9a88361',
      rnbwIncentivesController: '0x1669Fd5a3cf5cB806F9e401d08849B976d878fCc',
      treasury: '0x0E944C65261EdD33e228A920A7846B0cf5c50a45',
      uiIncentiveDataProvider: '0x7eCfdE0Eb9cA7031248DfBFB49e8716d1621E810',
      uiHaloPoolDataProvider: '0x2701e942E2Ff766BC1276A0687A92bA7340E18d2'
    },
    lpAssets: {},
    priceOracles: {},
    hTokens: {},
    variableDebtTokens: {},
    wrappedNativeToken: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
  }
}

export default addresses
