import './index.css'

const TransactionItem = props => {
  const {eachitem, onDelhistory} = props
  const {id, title, amount, type} = eachitem
  console.log(id)

  const ondelBtn = () => {
    onDelhistory(id)
  }

  return (
    <li className="items">
      <p className="para-tran-1">{title}</p>
      <p className="para-tran-2">Rs {amount}</p>
      <p className="para-tran-3">{type}</p>
      <button type="button" className="del-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="del-image"
          alt="delete"
          onClick={ondelBtn}
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
