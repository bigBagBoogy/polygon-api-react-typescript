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
      <div className="app-container">
        <div>
        <a href="https://bigbagboogy.github.io" target="_blank" rel="noopener noreferrer">Back to NFT minter</a>
        <h1>View NFT App <i>TESTNET</i> edition</h1>

          <p>example test address:</p>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>0xEC5DBFed2e8A5E88De2AC7a9E5884B0bD4F6Ca7f</p>
          <GetNft address="" onGetNft={handleGetNft} />
          <br /><br />
          <BalanceForm onGetBalance={handleGetBalance} />
          {balance && <h3>Balance: {balance}</h3>}
          <br /><br />
          <BlockNumber />
      </div>
      </div>
  );
}

export default App;
