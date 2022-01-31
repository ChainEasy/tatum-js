import { EvmBasedBlockchain } from '@tatumio/shared-core'
import { erc20, EvmBasedWeb3 } from '@tatumio/shared-blockchain-evm-based'
import { BlockchainEthereumService } from '@tatumio/api-client'

export const ethTx = (args: { blockchain: EvmBasedBlockchain; web3: EvmBasedWeb3 }) => {
  return {
    erc20: {
      ...erc20({
        ...args,
        broadcastFunction: BlockchainEthereumService.ethBroadcast,
      }),
    },
    //custodial: prepareGenerateCustodialWalletSignedTransaction()
  }
}

/*

export const ethCustodial = (args: { blockchain: EvmBasedBlockchain; web3: EvmBasedWeb3 }) => {
  return {
    prepareGenerateCustodialWalletSignedTransaction = async (body: GenerateCustodialAddress, provider?: string) => {
  }
}*/
