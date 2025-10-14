
import ExpenseCard from "./ExpenseCard"
import mockExpenseList from "../mockData/mockExpenseList"
import calculateTotal from "../utils/calculateTotal"

export default function ExpenseList() {
    const total = calculateTotal(mockExpenseList)

    return (
          <>
        {mockExpenseList.map( (expense, index) => (
            <ExpenseCard key={index} title={expense.title} amount={expense.amount} date={expense.date} category={expense.category} />
        ))}

        <div className="mt-4 text-right font-semibold text-gray-700">
            Total: ${total.toFixed(2)}
        </div>
        </>
    );
}