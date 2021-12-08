import {
  post,
  TransferOffchainKMS,
  SignatureId,
  getPendingTransactionsKMSByChain as getPendingTransactionsKMSByChainCore,
  Currency,
} from '@tatumio/tatum-core'

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/AlgorandTransfer" target="_blank">Tatum API documentation</a>
 */
export const offchainTransferKMS = async (body: TransferOffchainKMS): Promise<SignatureId> =>
  post(`/v3/offchain/algorand/transfer`, body, TransferOffchainKMS)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/GetPendingTransactionsToSign" target="_blank">Tatum API documentation</a>
 */
export const getPendingTransactionsKMSByChain = () => {
  return getPendingTransactionsKMSByChainCore(Currency.ALGO)
}
