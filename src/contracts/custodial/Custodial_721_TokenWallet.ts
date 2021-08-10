export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6105f58061007d6000396000f3fe60806040526004361061004e5760003560e01c8063150b7a021461005a578063715018a6146100905780638da5cb5b146100a7578063f2881e21146100c9578063f2fde38b146100dc57610055565b3661005557005b600080fd5b34801561006657600080fd5b5061007a610075366004610382565b6100fc565b60405161008791906104e2565b60405180910390f35b34801561009c57600080fd5b506100a561010c565b005b3480156100b357600080fd5b506100bc61019e565b604051610087919061049b565b6100a56100d736600461044e565b6101ad565b3480156100e857600080fd5b506100a56100f7366004610361565b610281565b630a85bd0160e11b949350505050565b610114610341565b6001600160a01b031661012561019e565b6001600160a01b0316146101545760405162461bcd60e51b815260040161014b90610574565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b836001141561021d57604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde906101e6903090879086906004016104af565b600060405180830381600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b5050505061027a565b8360031415610262576040516001600160a01b0384169083156108fc029084906000818181858888f1935050505015801561025c573d6000803e3d6000fd5b5061027a565b60405162461bcd60e51b815260040161014b906104f7565b5050505050565b610289610341565b6001600160a01b031661029a61019e565b6001600160a01b0316146102c05760405162461bcd60e51b815260040161014b90610574565b6001600160a01b0381166102e65760405162461bcd60e51b815260040161014b9061052e565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b038116811461035c57600080fd5b919050565b600060208284031215610372578081fd5b61037b82610345565b9392505050565b60008060008060808587031215610397578283fd5b6103a085610345565b935060206103af818701610345565b935060408601359250606086013567ffffffffffffffff808211156103d2578384fd5b818801915088601f8301126103e5578384fd5b8135818111156103f7576103f76105a9565b604051601f8201601f191681018501838111828210171561041a5761041a6105a9565b60405281815283820185018b1015610430578586fd5b81858501868301379081019093019390935250939692955090935050565b600080600080600060a08688031215610465578081fd5b61046e86610345565b94506020860135935061048360408701610345565b94979396509394606081013594506080013592915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260806060820181905260009082015260a00190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ef5ddea863fb8b00036b2e47be7b5e5bfb6c11f20999998c343bc6c3ba977fba64736f6c63430008000033';
