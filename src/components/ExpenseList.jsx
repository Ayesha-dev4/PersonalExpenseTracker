import { useState, useEffect } from "react";
import ExpenseCard from "./ExpenseCard"
import mockExpenseList from "../mockData/mockExpenseList"
import calculateTotal from "../utils/calculateTotal"
import { AnimatePresence } from "framer-motion";
import AddExpense from "./AddExpense";

export default function ExpenseList() {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : mockExpenseList;
    });
    const [showModal, setShowModal] = useState(false); // toggle to true to see expense form - false to dismiss


    const total = calculateTotal(expenses)
    console.log("Expenses array:", expenses);
    console.log("Calculated total:", calculateTotal(expenses));
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
        console.log(expenses)
    }, [expenses]) // Save the expenses updates

    function processNewExpense(expense){
        setExpenses((prevExpenses) => [...prevExpenses, expense])
        setShowModal(false)
    }

    return (
          <>
        <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm sm:text-base md:text-lg
    sm:px-5 sm:py-2.5 md:px-6 md:py-3"
      >
        + Add Expense
      </button>

      {/* AnimatePresence wraps around the conditional render */}
      <AnimatePresence>
        {showModal && (
          <AddExpense onCancel={() => setShowModal(false)} 
          onSubmit={(expense) => processNewExpense(expense)}
          />
        )}
      </AnimatePresence>

        {expenses.map( (expense, index) => (
            <ExpenseCard key={index} title={expense.title} amount={expense.amount} date={expense.date} category={expense.category} />
        ))}

        <div className="mt-4 text-right font-semibold text-gray-700">
            Total: ${total.toFixed(2)}
        </div>
        </>
    );
}