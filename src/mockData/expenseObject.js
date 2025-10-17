export default function newExpense(title, date, amount, category) {
    return {
        id: crypto.randomUUID(),
        title: title,
        date: date,
        amount: amount,
        category, category
    }
}