
import { motion } from "framer-motion";
import newExpense from "../mockData/expenseObject";

export default function AddExpense({onCancel, onSubmit}) {

    function handleSubmit(e) {
        e.preventDefault(); // prevent browser full-page reload 

        const expense = newExpense(e.target.title.value, e.target.date.value, 
            parseFloat(e.target.amount.value), e.target.category.value)

        onSubmit(expense);
        // clear form or close modal
        e.target.reset();
  }

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onCancel}>
         <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
        bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg 
        md:max-w-xl max-h-[90vh] overflow-y-auto
        ">
                <div className="relative">
                    <button 
                        onClick={onCancel} 
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
            <form onSubmit = {handleSubmit} className="flex flex-col space-y-3 p-4 bg-purple-200 rounded-md shadow-md">
            <label htmlFor="title" className="text-purple-600 text-left" >Title</label>
            <input type="text" id="title" placeholder="Enter name for expense" className="
            text-purple-600 border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 
            focus:ring-purple-400 w-full
            "/> 
            <label htmlFor="date" className="text-purple-600 text-left" >Date</label>
            <input type="date" id="date" placeholder="Enter date of expense" className="
            text-purple-600 border border-purple-300 rounded p-2 focus:outline-none 
            focus:ring-2 focus:ring-purple-400 w-full
            "/>
            <label htmlFor="amount spent" className="text-purple-600 text-left" >Amount Spent</label>
            <input type="number" id="amount" placeholder="Enter amount spent" step="0.01" className="
            text-purple-600 border border-purple-300 rounded p-2 focus:outline-none 
            focus:ring-2 focus:ring-purple-400 w-full
            "/>
            <label htmlFor="category" className="text-purple-600 text-left" >Category</label>
            <select
            id="category"
            className="
            text-purple-600 border border-purple-300 rounded p-2 
            focus:outline-none focus:ring-2 focus:ring-purple-400 w-full
            "
            >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
            </select>
            <button type="submit" className="bg-purple-600 text-white rounded p-2 mt-2 hover:bg-purple-700">
            Add Expense
            </button>
            </form>
        </div>
        </motion.div>
        </div>
        </>
    )
}