export default function ExpenseCard({title, date, amount, category}) {
  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <div className="flex-1 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 pl-2">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-red-500 font-semibold">-${amount.toFixed(2)}</p>
        <p className="text-xs text-gray-400">{category}</p>
      </div>
    </div>
    </>
  );
}
