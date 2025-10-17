function calculateTotal(array) {
  return array.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );
}

export default calculateTotal;