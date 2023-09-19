import axios from 'axios';
import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';


interface BalanceFormProps {
  onGetBalance: (address: string, balance: string) => void;
}

function BalanceForm({ onGetBalance }: BalanceFormProps) {
  const [address, setAddress] = useState<string>('');

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleGetBalance = () => {
      const apiKey = env.POLYGON_API_KEY;
    
      const url = `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`;
      const payload = {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_getBalance',
        params: [address, 'latest'], // Pass the address and block parameter
      };
  
      axios.post(url, payload)
        .then(response => {
          const balance = response.data.result;
          // Call the onGetBalance callback with the address and balance
          onGetBalance(address, balance);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    return (
      <div>
        <h2>Get Balance</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Ethereum Address"
            value={address}
            onChange={handleAddressChange}
          />
          <button onClick={handleGetBalance}>Get Balance</button>
        </div>
      </div>
    );
  }
  
  export default BalanceForm;