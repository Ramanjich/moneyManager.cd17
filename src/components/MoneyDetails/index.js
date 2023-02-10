import './index.css'

const MoneyDetails = props => {
  const {balChange, incomeChange, expensesChange} = props
  return (
    <>
      <div className="balance-container-1">
        <div className="image-container-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image-bal"
          />
        </div>
        <div className="container-1">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balChange}</p>
        </div>
      </div>

      <div className="balance-container-2">
        <div className="image-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image-income"
          />
        </div>
        <div className="container-2">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeChange}</p>
        </div>
      </div>

      <div className="balance-container-3">
        <div className="image-container-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image-expenses"
          />
        </div>
        <div className="container-3">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesChange}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
