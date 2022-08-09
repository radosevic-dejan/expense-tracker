import { useContext } from 'react';
import { GlobalContext } from '../context/state';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 
  return (
    <div>
      <h3 >Current Balance:</h3>
      <h3 >{total}</h3>
    </div>
  );
};
