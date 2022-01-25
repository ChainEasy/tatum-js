/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApproveTransferCustodialWalletKMS = {
    /**
     * Blockchain to work with.
     */
    chain: ApproveTransferCustodialWalletKMS.chain;
    /**
     * Address of custodial wallet to transfer from
     */
    custodialAddress: string;
    /**
     * Address of the token to transfer. Not valid for native address transfers.
     */
    tokenAddress?: string;
    /**
     * Type of the asset to transfer. 0 - ERC20, 1 - ERC721, 2 - ERC1155
     */
    contractType: ApproveTransferCustodialWalletKMS.contractType;
    /**
     * Blockchain address to allow spending.
     */
    spender: string;
    /**
     * Amount of the assets to be sent. Not valid for ERC-721 tokens.
     */
    amount?: string;
    /**
     * ID of token, if transaction is for ERC-721 or ERC-1155.
     */
    tokenId?: string;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId: string;
    /**
     * If signatureId is mnemonic-based, this is the index to the specific address from that mnemonic.
     */
    index?: number;
    /**
     * Nonce to be set to Ethereum transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Custom defined fee. If not present, it will be calculated automatically.
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}

export namespace ApproveTransferCustodialWalletKMS {

    /**
     * Blockchain to work with.
     */
    export enum chain {
        ETH = 'ETH',
        ONE = 'ONE',
        BSC = 'BSC',
        XDC = 'XDC',
        MATIC = 'MATIC',
    }

    /**
     * Type of the asset to transfer. 0 - ERC20, 1 - ERC721, 2 - ERC1155
     */
    export enum contractType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}