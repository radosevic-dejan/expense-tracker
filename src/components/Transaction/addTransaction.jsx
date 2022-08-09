import { useState, useContext } from "react";
import { GlobalContext } from "../../context/state";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleChange = (e, control) => {
    control(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }

  return (
    <div className="mt-4">
      <h3>Add a new transaction</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => handleChange(e, setText)}
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Amount... "
            value={amount}
            onChange={(e) => handleChange(e, setAmount)}
          />
        </div>

        <button className="w-[100%] text-center font-bold uppercase mt-4 bg-sky-500 rounded-xl py-2" type="submit">Add</button>
      </form>
    </div>
  );
};
