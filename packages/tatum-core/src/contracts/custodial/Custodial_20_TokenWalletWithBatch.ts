export const abi = [
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
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'contractType',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'contractType',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'tokenAddress',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'contractType',
        type: 'uint256[]',
      },
      {
        internalType: 'address[]',
        name: 'recipient',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amount',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
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
    stateMutability: 'payable',
    type: 'receive',
  },
]
export const bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6109a38061007d6000396000f3fe6080604052600436106100595760003560e01c8063715018a6146100655780638da5cb5b1461007c578063966f197c146100a7578063f2881e21146100ba578063f2fde38b146100cd578063f7e290a4146100ed57610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a61010d565b005b34801561008857600080fd5b5061009161019f565b60405161009e9190610803565b60405180910390f35b61007a6100b5366004610717565b6101ae565b61007a6100c83660046106ca565b6103f8565b3480156100d957600080fd5b5061007a6100e83660046106a9565b6104c9565b3480156100f957600080fd5b5061007a6101083660046106ca565b610589565b6101156105bc565b6001600160a01b031661012661019f565b6001600160a01b0316146101555760405162461bcd60e51b815260040161014c906108ad565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b83518551146101bc57600080fd5b83518351146101ca57600080fd5b81518351146101d857600080fd5b60005b85518110156103f05784818151811061020457634e487b7160e01b600052603260045260246000fd5b60200260200101516000141561030f5785818151811061023457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663a9059cbb85838151811061026a57634e487b7160e01b600052603260045260246000fd5b602002602001015185848151811061029257634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b81526004016102b7929190610817565b602060405180830381600087803b1580156102d157600080fd5b505af11580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030991906107e3565b506103de565b84818151811061032f57634e487b7160e01b600052603260045260246000fd5b6020026020010151600314156103c65783818151811061035f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166108fc84838151811061039357634e487b7160e01b600052603260045260246000fd5b60200260200101519081150290604051600060405180830381858888f19350505050158015610309573d6000803e3d6000fd5b60405162461bcd60e51b815260040161014c90610830565b806103e881610930565b9150506101db565b505050505050565b836104835760405163a9059cbb60e01b81526001600160a01b0386169063a9059cbb9061042b9086908690600401610817565b602060405180830381600087803b15801561044557600080fd5b505af1158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d91906107e3565b506104c2565b83600314156103c6576040516001600160a01b0384169083156108fc029084906000818181858888f1935050505015801561047d573d6000803e3d6000fd5b5050505050565b6104d16105bc565b6001600160a01b03166104e261019f565b6001600160a01b0316146105085760405162461bcd60e51b815260040161014c906108ad565b6001600160a01b03811661052e5760405162461bcd60e51b815260040161014c90610867565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b836103c65760405163095ea7b360e01b81526001600160a01b0386169063095ea7b39061042b9086908690600401610817565b3390565b80356001600160a01b03811681146105d757600080fd5b919050565b600082601f8301126105ec578081fd5b813560206106016105fc8361090c565b6108e2565b828152818101908583018385028701840188101561061d578586fd5b855b8581101561064257610630826105c0565b8452928401929084019060010161061f565b5090979650505050505050565b600082601f83011261065f578081fd5b8135602061066f6105fc8361090c565b828152818101908583018385028701840188101561068b578586fd5b855b858110156106425781358452928401929084019060010161068d565b6000602082840312156106ba578081fd5b6106c3826105c0565b9392505050565b600080600080600060a086880312156106e1578081fd5b6106ea866105c0565b9450602086013593506106ff604087016105c0565b94979396509394606081013594506080013592915050565b600080600080600060a0868803121561072e578081fd5b853567ffffffffffffffff80821115610745578283fd5b61075189838a016105dc565b96506020880135915080821115610766578283fd5b61077289838a0161064f565b95506040880135915080821115610787578283fd5b61079389838a016105dc565b945060608801359150808211156107a8578283fd5b6107b489838a0161064f565b935060808801359150808211156107c9578283fd5b506107d68882890161064f565b9150509295509295909350565b6000602082840312156107f4578081fd5b815180151581146106c3578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff8111828210171561090457610904610957565b604052919050565b600067ffffffffffffffff82111561092657610926610957565b5060209081020190565b600060001982141561095057634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220dcceb1121118ca9c146a44a69cb6bb9159270c3ce6b57271ef817f222e60cc8164736f6c63430008000033'