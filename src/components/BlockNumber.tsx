import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

function BlockNumber() {
  const [blockNumber, setBlockNumber] = useState<string | null>(null);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  const fetchBlockNumber = async () => {
    // Your Alchemy API Key
    const apiKey = env.POLYGON_API_KEY;

    try {
      const url = `https://polygonzkevm-mainnet.g.alchemy.com/v2/${apiKey}`;
      const payload = {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_blockNumber',
        params: [],
      };
      const response = await axios.post(url, payload);
      const result = response.data.result;
      setBlockNumber(result);
      setHasFetched(true); // Set to true after fetching data
      console.error(hasFetched);
      localStorage.setItem('hasFetchedBlockNumber', 'true'); // Store in local storage
    } catch (error) {
      console.error('Error fetching block number:', error);
    }
  };

  useEffect(() => {
    // Check local storage for previous fetch status
    const storedHasFetched = localStorage.getItem('hasFetchedBlockNumber');
    if (storedHasFetched === 'true') {
      setHasFetched(true);
    }
  }, []);

  return (
    <div>
      <h3>Get Polygon zkEVM Block Number</h3>
      <p>Current Block Number: {blockNumber}</p>
      <button onClick={fetchBlockNumber}>
        Fetch Block Number
      </button>
    </div>
  );
}

export default BlockNumber;
