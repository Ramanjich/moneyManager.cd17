import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    addClick: false,
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].displayText,
    balChange: 0,
    incomeChange: 0,
    expensesChange: 0,
    historyList: [],
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  onTypeChange = event => {
    this.setState({typeInput: event.target.value})
  }

  onSubmittran = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const newHistory = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }

    if (typeInput === 'Income') {
      this.setState(prevState => ({
        addClick: true,
        titleInput: '',
        amountInput: '',
        typeInput: prevState.typeInput,
        balChange: prevState.balChange + parseInt(amountInput),
        incomeChange: prevState.incomeChange + parseInt(amountInput),
        historyList: [...prevState.historyList, newHistory],
      }))
    } else if (typeInput === 'Expenses') {
      this.setState(prevState => ({
        addClick: true,
        titleInput: '',
        amountInput: '',
        typeInput: prevState.typeInput,
        balChange: prevState.balChange - parseInt(amountInput),
        expensesChange: prevState.expensesChange + parseInt(amountInput),
        historyList: [...prevState.historyList, newHistory],
      }))
    }
  }

  onDelhistory = id => {
    const {historyList} = this.state

    const updatedList = historyList.filter(eachList => eachList.id !== id)
    const deletedList = historyList.filter(eachList => eachList.id === id)

    const delAmount = parseInt(deletedList[0].amount)

    if (deletedList[0].type === 'Income') {
      this.setState(prevState => ({
        balChange: prevState.balChange - delAmount,
        incomeChange: prevState.incomeChange - delAmount,
        historyList: updatedList,
      }))
    } else if (deletedList[0].type === 'Expenses') {
      this.setState(prevState => ({
        balChange: prevState.balChange + delAmount,
        expensesChange: prevState.expensesChange - delAmount,
        historyList: updatedList,
      }))
    }
  }

  render() {
    const {
      addClick,
      titleInput,
      amountInput,
      typeInput,
      balChange,
      incomeChange,
      expensesChange,
      historyList,
    } = this.state

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="name-container">
            <h1>Hi,Richards</h1>
            <p>
              Welcome back to your{' '}
              <span className="span-name-para">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              balChange={balChange}
              incomeChange={incomeChange}
              expensesChange={expensesChange}
            />
          </div>
          <div className="tran-and-history-container">
            <div className="transaction-container">
              <form className="form-card" onSubmit={this.onSubmittran}>
                <h1>Add Transaction</h1>
                <div className="title-con">
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    id="title"
                    onChange={this.onTitleChange}
                    placeholder="TITLE"
                    value={titleInput}
                  />
                </div>
                <div className="amount-con">
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    type="text"
                    id="amount"
                    onChange={this.onAmountChange}
                    placeholder="AMOUNT"
                    value={amountInput}
                  />
                </div>
                <div className="type-container">
                  <label htmlFor="type">TYPE</label>
                  <select
                    className="select-panel"
                    value={typeInput}
                    id="type"
                    onChange={this.onTypeChange}
                  >
                    {transactionTypeOptions.map(eachType => (
                      <option
                        value={eachType.displayText}
                        key={eachType.optionId}
                      >
                        {eachType.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="tran-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1>History</h1>
              <div className="t-a-type-container">
                <p className="para-h-title">Title</p>
                <p className="para-h-amount">Amount</p>
                <p className="para-h-type">Type</p>
              </div>
              <ul className="history-items-container">
                {addClick &&
                  historyList.map(eachitem => (
                    <TransactionItem
                      eachitem={eachitem}
                      key={eachitem.id}
                      onDelhistory={this.onDelhistory}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
