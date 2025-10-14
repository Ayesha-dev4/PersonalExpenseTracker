export default function Header() {
    return (
        <header className='bg-purple-600 text-white py-4 shadow-md'>
            <div className="max-w-3xl mx-auto flex items-center justify-between px-4">
                <h1 className="text-xl font-semibold">Expense Tracker</h1>
                <span className="text-sm text-purple-100">
                    Tracking Your Spending is now a Breeze
                </span>
            </div>
        </header>
    )
}