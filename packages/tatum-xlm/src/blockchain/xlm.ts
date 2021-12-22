import { TransactionHash, get, post } from '@tatumio/tatum-core'

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetAccountInfo" target="_blank">Tatum API documentation</a>
 */
export const getAccountInfo = async (account: string): Promise<{ sequence: string }> => get(`/v3/xlm/account/${account}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmBroadcast" target="_blank">Tatum API documentation</a>
 */
export const broadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> =>
  post(`/v3/xlm/broadcast`, { txData, signatureId })

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetLastClosedLedger" target="_blank">Tatum API documentation</a>
 */
export const getCurrentLedger = async () => get(`/v3/xlm/info`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetFee" target="_blank">Tatum API documentation</a>
 */
export const getFee = async () => get(`/v3/xlm/fee`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetLedger" target="_blank">Tatum API documentation</a>
 */
export const getLedger = async (i: number) => get(`/v3/xlm/ledger/${i}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetLedgerTx" target="_blank">Tatum API documentation</a>
 */
export const getLedgerTx = async (i: number) => get(`/v3/xlm/ledger/${i}/transaction`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetTransaction" target="_blank">Tatum API documentation</a>
 */
export const getTransaction = async (hash: string) => get(`/v3/xlm/transaction/${hash}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/XlmGetAccountTx" target="_blank">Tatum API documentation</a>
 */
export const getAccountTransactions = async (address: string) => get(`/v3/xlm/account/tx/${address}`)