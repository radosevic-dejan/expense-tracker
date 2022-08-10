import { useContext } from 'react';
import { GlobalContext } from '../context/state';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 
  return (
    <div className='px-2'>
      <h3 className='font-bold text-red-600 mb-2'>Current Balance:</h3>
      <h3 className='font-bold text-lg'>{total}</h3>
    </div>
  );
};
