import './App.css';
import BalanceForm from './components/Balance';
import BlockNumber from './components/BlockNumber';
import React, { useState } from 'react';

function App() {
  const [balance, setBalance] = useState<string | null>(null);

  const handleGetBalance = (address: string, newBalance: string) => {
    // Update the balance state with the new balance data
    setBalance(newBalance);
  };

  return (
    <div>
      <h2>Polygon App</h2>
      <BalanceForm onGetBalance={handleGetBalance} />
      <BlockNumber />
      {balance && <h3>Balance: {balance}</h3>}
    </div>
  );
}

export default App;
