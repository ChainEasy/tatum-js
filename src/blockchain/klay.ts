import BigNumber from 'bignumber.js'
import { get, post } from '../connector/tatum'
import { EstimateGasEth, EthBlock, EthEstimateGas, EthTx, TransactionHash } from '../model'

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayBroadcast" target="_blank">Tatum API documentation</a>
 */
export const klaytnBroadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> =>
  post(`/v3/klaytn/broadcast`, { txData, signatureId })

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayGetTransactionCount" target="_blank">Tatum API documentation</a>
 */
export const klaytnGetTransactionsCount = async (address: string): Promise<number> => get(`/v3/klaytn/transaction/count/${address}`)

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayGetCurrentBlock" target="_blank">Tatum API documentation</a>
 */
export const klaytnGetCurrentBlock = async (): Promise<number> => get(`/v3/klaytn/block/current`)

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayGetBlock" target="_blank">Tatum API documentation</a>
 */
export const klaytnGetBlock = async (hash: string): Promise<EthBlock> => get(`/v3/klaytn/block/${hash}`)

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayGetBalance" target="_blank">Tatum API documentation</a>
 */
export const klaytnGetAccountBalance = async (address: string): Promise<BigNumber> => get(`/v3/klaytn/account/balance/${address}`)

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayGetTransaction" target="_blank">Tatum API documentation</a>
 */
export const klaytnGetTransaction = async (hash: string): Promise<EthTx> => get(`/v3/klaytn/transaction/${hash}`)

/**
 * For more details, see <a href="https://apidoc.tatum.io/#operation/KlayEstimateGas" target="_blank">Tatum API documentation</a>
 */
export const klaytnEstimateGas = (body: EstimateGasEth): Promise<EthEstimateGas> => post('/v3/klaytn/gas', body, EstimateGasEth)
