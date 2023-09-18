// App.tsx
import './App.css';
import Balance from './components/Balance'; 
import BlockNumber from './components/BlockNumber';

function App() {
 
  return (
    <div>
      <h2>Polygon App</h2>
      <Balance />
      <BlockNumber />       
    </div>
  );
}
export default App;