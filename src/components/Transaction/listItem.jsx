import { useContext } from "react";
import { GlobalContext } from "../../context/state";

export const ListItem = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? "bg-red-400" : "bg-green300"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
