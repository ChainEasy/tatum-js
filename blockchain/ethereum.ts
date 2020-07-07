import axios from 'axios';

export const broadcastEth = async (txData: string): Promise<{ txId: string }> => {
    return (await axios.post(`https://api.tatum.io/v3/ethereum/broadcast`,
        {txData},
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const getEthTransactionsCount = async (address: string): Promise<number> => {
    return (await axios.get(`https://api.tatum.io/v3/ethereum/transaction/count/${address}`,
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};