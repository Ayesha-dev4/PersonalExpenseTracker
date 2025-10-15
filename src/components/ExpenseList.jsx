
import ExpenseCard from "./ExpenseCard"
import mockExpenseList from "../mockData/mockExpenseList"
import calculateTotal from "../utils/calculateTotal"

export default function ExpenseList() {
    const [expenses, setExpenses] = useState(mockExpenseList)

    const total = calculateTotal(expenses)
    useEffect(() => {
    // this runs once after the component renders
    const storedExpenses = localStorage.getItem("expenses")
    if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses))
    }
    }, [])

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses]) // Save the expenses updates

    return (
          <>
        {expenses.map( (expense, index) => (
            <ExpenseCard key={index} title={expense.title} amount={expense.amount} date={expense.date} category={expense.category} />
        ))}

        <div className="mt-4 text-right font-semibold text-gray-700">
            Total: ${total.toFixed(2)}
        </div>
        </>
    );
}