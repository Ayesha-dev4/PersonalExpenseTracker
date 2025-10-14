function calculateTotal(array){
    return array.reduce((accumulator, currentExpense) => 
         accumulator+currentExpense.amount, 0)
}

export default calculateTotal;