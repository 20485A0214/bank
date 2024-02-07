import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <div className="logo-container">
            <p className="heading">S</p>
          </div>
          <h1 className="heading2">Sarah Williams</h1>
        </div>
        <div className="yourBalance">
          <h2>Your Balance</h2>
          <div>
            <h3>2000</h3>
            <p>InRupees</p>
          </div>
          <h4>Withdraw</h4>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <div>
            <DenominationItem />
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
