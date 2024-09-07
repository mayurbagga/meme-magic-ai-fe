export const idoAbi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'dstToken',
        type: 'address',
      },
    ],
    name: 'addDstTokenAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenImplementation',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_uniswapV2Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_uniswapV2Factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_bondingCurve',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_feePercent',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_endpoint',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_dstEid',
        type: 'uint32',
      },
      {
        internalType: 'bytes',
        name: '_options',
        type: 'bytes',
      },
    ],
    name: 'bridgeToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'maxSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fundingGoal',
        type: 'uint256',
      },
    ],
    name: 'createToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ERC1167FailedCreateClone',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidDelegate',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidEndpointCall',
    type: 'error',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'srcEid',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'sender',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'nonce',
            type: 'uint64',
          },
        ],
        internalType: 'struct Origin',
        name: '_origin',
        type: 'tuple',
      },
      {
        internalType: 'bytes32',
        name: '_guid',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: '_message',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: '_executor',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_extraData',
        type: 'bytes',
      },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LzTokenUnavailable',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'eid',
        type: 'uint32',
      },
    ],
    name: 'NoPeer',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'msgValue',
        type: 'uint256',
      },
    ],
    name: 'NotEnoughNative',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'OnlyEndpoint',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'eid',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: 'sender',
        type: 'bytes32',
      },
    ],
    name: 'OnlyPeer',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyGuardReentrantCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountInvested',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountMinted',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'contributionWithoutFee',
        type: 'uint256',
      },
    ],
    name: 'BuyToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'srcTokenAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'dstTokenAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'deployerAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'MAX_SUPPLY',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'INITIAL_SUPPLY',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'FUNDING_SUPPLY',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'FUNDING_GOAL',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct TokenFactory.TokenDetails',
        name: 'tokenDetails',
        type: 'tuple',
      },
    ],
    name: 'FactoryTokenIndex',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'eid',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'peer',
        type: 'bytes32',
      },
    ],
    name: 'PeerSet',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sell',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bondingCurve',
        type: 'address',
      },
    ],
    name: 'setBondingCurve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_delegate',
        type: 'address',
      },
    ],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_feePercent',
        type: 'uint256',
      },
    ],
    name: 'setFeePercent',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_eid',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_peer',
        type: 'bytes32',
      },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_dstEid',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'dstFactoryAddress',
        type: 'address',
      },
    ],
    name: 'setPeerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'TokenCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'TokenLiqudityAdded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'srcEid',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'sender',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'nonce',
            type: 'uint64',
          },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
    ],
    name: 'allowInitializePath',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondingCurve',
    outputs: [
      {
        internalType: 'contract BondingCurve',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'collateral',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endpoint',
    outputs: [
      {
        internalType: 'contract ILayerZeroEndpointV2',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'FEE_DENOMINATOR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feePercent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'index',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'srcEid',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'sender',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'nonce',
            type: 'uint64',
          },
        ],
        internalType: 'struct Origin',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
    ],
    name: 'isComposeMsgSender',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'nextNonce',
    outputs: [
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      {
        internalType: 'uint64',
        name: 'senderVersion',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'receiverVersion',
        type: 'uint64',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'eid',
        type: 'uint32',
      },
    ],
    name: 'peers',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'peer',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_dstEid',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_options',
        type: 'bytes',
      },
      {
        internalType: 'bool',
        name: '_payInLzToken',
        type: 'bool',
      },
    ],
    name: 'quote',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'nativeFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lzTokenFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct MessagingFee',
        name: '_fee',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenAddressToIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokenDetails',
    outputs: [
      {
        internalType: 'address',
        name: 'srcTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dstTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'deployerAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'MAX_SUPPLY',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'INITIAL_SUPPLY',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'FUNDING_SUPPLY',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'FUNDING_GOAL',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokens',
    outputs: [
      {
        internalType: 'enum TokenFactory.TokenState',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'uniswapV2Factory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'uniswapV2Router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
// [
//   {
//     inputs: [],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//   },
//   {
//     inputs: [],
//     name: 'AlreadyClaimedEth',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'AlreadyClaimedToken',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'AlreadyDeposit',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'AlreadyEnd',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'AlreadyRandom',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'IncorrectValue',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NFTOfEXCommunityIsZeroAddress',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NFTOfKolIsZeroAddress',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoDeposit',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoQualificationOrAlreadyClaim',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoSetTokenAmount',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoStartClaim',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoStartRaise',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoStartWithdraw',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoTrueRandomOfLeader',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoTrueRandomOfMember',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NotEOA',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NotOver',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NotPeriod',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'OverPerUserLimit',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'PoolCanceled',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'PoolEnded',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'ReentrancyGuardReentrantCall',
//     type: 'error',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'poolId',
//         type: 'uint256',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'buyAmount',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'userWeight',
//         type: 'uint256',
//       },
//     ],
//     name: 'IdoBuy',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'poolId',
//         type: 'uint256',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'userAddress',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'refundAmount',
//         type: 'uint256',
//       },
//     ],
//     name: 'IdoClaimEth',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'poolId',
//         type: 'uint256',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'userAddress',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'claimAmount',
//         type: 'uint256',
//       },
//     ],
//     name: 'IdoClaimToken',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'id',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'uint40',
//         name: 'startTime',
//         type: 'uint40',
//       },
//       {
//         indexed: false,
//         internalType: 'uint40',
//         name: 'endTime',
//         type: 'uint40',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'totalETHAmount',
//         type: 'uint256',
//       },
//     ],
//     name: 'IdoPoolInit',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'poolId',
//         type: 'uint256',
//       },
//       {
//         indexed: true,
//         internalType: 'uint8',
//         name: 'status',
//         type: 'uint8',
//       },
//     ],
//     name: 'IdoSetPoolStatus',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//     ],
//     name: 'OwnershipTransferred',
//     type: 'event',
//   },
//   {
//     inputs: [],
//     name: 'NFTOfExchangeCommunity',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'NFTOfKol',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'SCALE',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'adr',
//         type: 'address',
//       },
//     ],
//     name: 'authorize',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address[]',
//         name: '_users',
//         type: 'address[]',
//       },
//       {
//         internalType: 'uint256',
//         name: '_status',
//         type: 'uint256',
//       },
//     ],
//     name: 'batchSetWhiteList',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'bytes32[]',
//         name: '_merkleproof',
//         type: 'bytes32[]',
//       },
//       {
//         internalType: 'uint256',
//         name: '_type',
//         type: 'uint256',
//       },
//     ],
//     name: 'buy',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//     ],
//     name: 'claimEth',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//     ],
//     name: 'claimToken',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'communityCheckMax',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'getAllPools',
//     outputs: [
//       {
//         components: [
//           {
//             internalType: 'contract ERC20',
//             name: 'tokenAddress',
//             type: 'address',
//           },
//           {
//             internalType: 'uint256',
//             name: 'tokenAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint8',
//             name: 'status',
//             type: 'uint8',
//           },
//           {
//             internalType: 'uint40',
//             name: 'startTime',
//             type: 'uint40',
//           },
//           {
//             internalType: 'uint40',
//             name: 'endTime',
//             type: 'uint40',
//           },
//           {
//             internalType: 'uint168',
//             name: 'perUserLimit',
//             type: 'uint168',
//           },
//           {
//             internalType: 'uint256',
//             name: 'ethBalance',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'totalETHAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'weightedSum',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'raisedEthAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'string',
//             name: 'uriId',
//             type: 'string',
//           },
//         ],
//         internalType: 'struct IDO.PoolInfo[]',
//         name: '',
//         type: 'tuple[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_userAddress',
//         type: 'address',
//       },
//     ],
//     name: 'getClaimEthAmount',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: 'refunds',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_userAddress',
//         type: 'address',
//       },
//     ],
//     name: 'getClaimTokenAmount',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: 'claimAmount',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_userAddress',
//         type: 'address',
//       },
//     ],
//     name: 'getIsClaimedEth',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_userAddress',
//         type: 'address',
//       },
//     ],
//     name: 'getIsClaimedToken',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//     ],
//     name: 'getPoolUserAddresses',
//     outputs: [
//       {
//         internalType: 'address[]',
//         name: '',
//         type: 'address[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_user',
//         type: 'address',
//       },
//     ],
//     name: 'getUserInfo',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: 'deposit',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'weight',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: '_user',
//         type: 'address',
//       },
//       {
//         internalType: 'bytes32[]',
//         name: '_merkleproof',
//         type: 'bytes32[]',
//       },
//       {
//         internalType: 'uint256',
//         name: '_type',
//         type: 'uint256',
//       },
//     ],
//     name: 'getUserWeight',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: 'weight',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint40',
//         name: '_startTime',
//         type: 'uint40',
//       },
//       {
//         internalType: 'uint40',
//         name: '_endTime',
//         type: 'uint40',
//       },
//       {
//         internalType: 'uint168',
//         name: '_perUserLimit',
//         type: 'uint168',
//       },
//       {
//         internalType: 'uint256',
//         name: '_totalETHAmount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'string',
//         name: '_uriId',
//         type: 'string',
//       },
//     ],
//     name: 'initializePool',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'adr',
//         type: 'address',
//       },
//     ],
//     name: 'isAuthorized',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'account',
//         type: 'address',
//       },
//     ],
//     name: 'isOwner',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'kolWeight',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'merkleRootCommunity',
//     outputs: [
//       {
//         internalType: 'bytes32',
//         name: '',
//         type: 'bytes32',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'merkleRootKol',
//     outputs: [
//       {
//         internalType: 'bytes32',
//         name: '',
//         type: 'bytes32',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'owner',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'poolCount',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     name: 'pools',
//     outputs: [
//       {
//         internalType: 'contract ERC20',
//         name: 'tokenAddress',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenAmount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint8',
//         name: 'status',
//         type: 'uint8',
//       },
//       {
//         internalType: 'uint40',
//         name: 'startTime',
//         type: 'uint40',
//       },
//       {
//         internalType: 'uint40',
//         name: 'endTime',
//         type: 'uint40',
//       },
//       {
//         internalType: 'uint168',
//         name: 'perUserLimit',
//         type: 'uint168',
//       },
//       {
//         internalType: 'uint256',
//         name: 'ethBalance',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'totalETHAmount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'weightedSum',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'raisedEthAmount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'string',
//         name: 'uriId',
//         type: 'string',
//       },
//       {
//         internalType: 'bool',
//         name: 'isWithdrawEth',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_communityCheckMax',
//         type: 'uint256',
//       },
//     ],
//     name: 'setCommunityCheckMax',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_kolWeight',
//         type: 'uint256',
//       },
//     ],
//     name: 'setKolWeight',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'bytes32',
//         name: '_merkleRootCommunity',
//         type: 'bytes32',
//       },
//     ],
//     name: 'setMerkleRootCommunity',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'bytes32',
//         name: '_merkleRootKol',
//         type: 'bytes32',
//       },
//     ],
//     name: 'setMerkleRootKol',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: '_NFTOfExchangeCommunity',
//         type: 'address',
//       },
//     ],
//     name: 'setNFTOfExchange',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: '_NFTOfKol',
//         type: 'address',
//       },
//     ],
//     name: 'setNFTOfKol',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint40',
//         name: '_endTime',
//         type: 'uint40',
//       },
//     ],
//     name: 'setPoolEndTime',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint8',
//         name: 'status',
//         type: 'uint8',
//       },
//     ],
//     name: 'setPoolStatus',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_tokenAddress',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: '_tokenAmount',
//         type: 'uint256',
//       },
//     ],
//     name: 'setTokenData',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'string',
//         name: '_uriId',
//         type: 'string',
//       },
//     ],
//     name: 'setUriId',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: '_whitelist',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: '_status',
//         type: 'uint256',
//       },
//     ],
//     name: 'setWhitelist',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address payable',
//         name: 'adr',
//         type: 'address',
//       },
//     ],
//     name: 'transferOwnership',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'adr',
//         type: 'address',
//       },
//     ],
//     name: 'unauthorize',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     name: 'whitelist',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_amount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_to',
//         type: 'address',
//       },
//     ],
//     name: 'withdraw',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '_poolId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: '_to',
//         type: 'address',
//       },
//     ],
//     name: 'withdrawPoolEth',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     stateMutability: 'payable',
//     type: 'receive',
//   },
// ] as const
