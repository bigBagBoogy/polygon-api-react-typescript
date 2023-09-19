import './App.css';
import BalanceForm from './components/Balance';
import BlockNumber from './components/BlockNumber';
import React, { useState } from 'react';
import GetNft from './components/GetNft';


function App() {
  const [balance, setBalance] = useState<string | null>(null);

  const handleGetBalance = (address: string, newBalance: string) => {
    // Update the balance state with the new balance data
    setBalance(newBalance);
  };
  const handleGetNft = (nftData: any) => {
    // Handle the NFT data here as needed
    console.log('Received NFT Data:', nftData);
  };

  return (
    <div>
      <h2>Polygon App</h2>
      <BalanceForm onGetBalance={handleGetBalance} />
      <BlockNumber />
      <GetNft address="0xEC5DBFed2e8A5E88De2AC7a9E5884B0bD4F6Ca7f" onGetNft={handleGetNft} />
      {balance && <h3>Balance: {balance}</h3>}
    </div>
  );
}

export default App;
