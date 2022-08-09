import { GlobalProvider } from "./context/state"
import { Balance } from "./components/Balance"
import { IncomeDrain } from "./components/IncomeDrain"
import { List } from "./components/Transaction/list"
import { AddTransaction } from "./components/Transaction/addTransaction"


function App() {

  return (
    <GlobalProvider>
      <div className="w-[300px] mx-auto mt-10 flex flex-col">
        <h1 className="text-center font-bold uppercase mb-6">Expense Tracker</h1>
        <Balance />
        <IncomeDrain />
        <List />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
