import { useContext } from "react";
import { GlobalContext } from "../../context/state";
import { ListItem } from "./listItem";

export const List = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="pt-4 px-2">
      <h3 className="mb-3 text-center font-bold">History of transactions</h3>
      { transactions.length === 0 ? <p className="text-md font-light text-teal-900">Nothing to display, add new transaction...</p> :
      <ul className="flex flex-col justify-between">
        {transactions.map((transaction) => {
          return <ListItem key={transaction.id} transaction={transaction} />;
        })}
      </ul> }
    </div>
  );
};
