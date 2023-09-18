// components/BlockNumber.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';


function BlockNumber() {
  const [blockNumber, setBlockNumber] = useState<string | null>(null);

  useEffect(() => {   
    // const apiKey = process.env.POLYGON_API_KEY; // Replace with your Alchemy API key
    const apiKey = env.POLYGON_API_KEY;
    const url = `https://polygonzkevm-mainnet.g.alchemy.com/v2/${apiKey}`;
    
    const payload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_blockNumber',
      params: []
    };
    
    axios.post(url, payload)
      .then(response => {
        const result = response.data.result;
        setBlockNumber(result); // Update the blockNumber state with the fetched value
        console.log('Block Number:', result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <h2>Polygon zkEVM Block Number</h2>
      {blockNumber ? (
        <p>Current Block Number: {blockNumber}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlockNumber;
