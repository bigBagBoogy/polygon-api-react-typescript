import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Balance() {
  const [balance, setBalance] = useState<string | null>(null);
  const address = '0xEC5DBFed2e8A5E88De2AC7a9E5884B0bD4F6Ca7f'; // Replace with the address you're interested in
  const apiKey = 'r32vgucX-l2554u4_FqXg0CTZQLLwSH_'; // Replace with your Alchemy API key

  useEffect(() => {
    const url = `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`;
    const payload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_getBalance',
      params: [address, 'latest'] // Replace 'latest' with 'pending' or 'earliest' if needed
    };

    axios.post(url, payload)
      .then(response => {
        const balanceInWei = response.data.result;
        setBalance(balanceInWei);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {balance ? (
        <p>Balance in Wei: {balance}</p>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
}

export default Balance;
