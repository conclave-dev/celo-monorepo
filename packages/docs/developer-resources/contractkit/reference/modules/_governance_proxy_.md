# External module: "governance/proxy"

## Index

### Variables

* [PROXY_ABI](_governance_proxy_.md#const-proxy_abi)
* [PROXY_SET_IMPLEMENTATION_SIGNATURE](_governance_proxy_.md#const-proxy_set_implementation_signature)

### Functions

* [getImplementationOfProxy](_governance_proxy_.md#const-getimplementationofproxy)
* [setImplementationOnProxy](_governance_proxy_.md#const-setimplementationonproxy)

## Variables

### `Const` PROXY_ABI

• **PROXY_ABI**: *ABIDefinition[]* = [
  {
    constant: true,
    inputs: [],
    name: '_getImplementation',
    outputs: [
      {
        name: 'implementation',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x42404e07',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'implementation',
        type: 'address',
      },
    ],
    name: '_setImplementation',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbb913f41',
  },
]

*Defined in [packages/contractkit/src/governance/proxy.ts:4](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proxy.ts#L4)*

___

### `Const` PROXY_SET_IMPLEMENTATION_SIGNATURE

• **PROXY_SET_IMPLEMENTATION_SIGNATURE**: *string* = PROXY_ABI[1].signature

*Defined in [packages/contractkit/src/governance/proxy.ts:37](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proxy.ts#L37)*

## Functions

### `Const` getImplementationOfProxy

▸ **getImplementationOfProxy**(`web3`: Web3, `proxyContractAddress`: string): *Promise‹string›*

*Defined in [packages/contractkit/src/governance/proxy.ts:39](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proxy.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`web3` | Web3 |
`proxyContractAddress` | string |

**Returns:** *Promise‹string›*

___

### `Const` setImplementationOnProxy

▸ **setImplementationOnProxy**(`address`: string): *any*

*Defined in [packages/contractkit/src/governance/proxy.ts:47](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proxy.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *any*
