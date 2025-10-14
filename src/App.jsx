import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto mt-6 px-4 space-y-4">
        <ExpenseList />
      </main>
    </>
  );
}

export default App;
