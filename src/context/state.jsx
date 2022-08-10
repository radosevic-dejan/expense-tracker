import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
    transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // state actiona
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return(
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
  )
}
