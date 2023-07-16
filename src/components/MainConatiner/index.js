import {Component} from 'react'
import './index.css'

import {BsCurrencyRupee, BsClock} from 'react-icons/bs'
import {GiOpenBook} from 'react-icons/gi'
import {PiTelevisionSimpleLight} from 'react-icons/pi'
import {TbSchool} from 'react-icons/tb'
import {BiBlock, BiLockAlt} from 'react-icons/bi'
import {CgTimer} from 'react-icons/cg'

const arrayOfOptions = [
  {
    id: 1,
    value: 179,
    subscriptionPlan: 12,
    recommended: true,
  },
  {
    id: 2,
    value: 149,
    subscriptionPlan: 6,
    recommended: false,
  },
  {
    id: 3,
    value: 99,
    subscriptionPlan: 3,
    recommended: false,
  },
]

class MainConatiner extends Component {
  state = {
    optionValue: 0,
  }

  onChangeValue = e => {
    const value = parseInt(e.target.value, 10)
    this.setState(
      {
        optionValue: value,
      },
      () => {
        const {optionValue} = this.state
        console.log(optionValue)
      },
    )
  }

 
  render() {
    const {optionValue} = this.state
    let totalAmount
    if (optionValue !== 0) {
      const amount = 18500
      totalAmount = amount + optionValue
      console.log(totalAmount)
    } else {
      totalAmount = 0
    }

    return (
      <div className="container">
        <div className="first-container">
          <h1 className="main-heading">Access curated courses worth </h1>
          <p className="sub-line">
            <BsCurrencyRupee />
            <span className="on-line">18500 </span> at just
            <span className="offer-value">
              <BsCurrencyRupee />
              99
            </span>
            per year!
          </p>
          <div className="sub-container">
            <div className="items">
              <GiOpenBook className="item-color" />
              <p className="item-names">
                <span className="span-color">100+</span> Job relevant courses
              </p>
            </div>
            <div className="items">
              <BsClock className="item-color" />
              <p className="item-names">
                <span className="span-color">20000+</span> Hours of content
              </p>
            </div>
            <div className="items">
              <PiTelevisionSimpleLight className="item-color" />
              <p className="item-names">
                <span className="span-color">Exclusive</span> Webinar access
              </p>
            </div>
            <div className="items">
              <TbSchool className="item-color4" />
              <p className="item-names4">
                Scholarship worth
                <span className="span-color">
                  <BsCurrencyRupee />
                  94,500
                </span>
              </p>
            </div>
            <div className="items">
              <BiBlock className="item-color5" />
              <p className="item-names5">
                <span className="span-color5">Ad Free</span> learning experience
              </p>
            </div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="topContainer">
            <div className="sign-element1">
              <div className="round-circle">1</div>
              <p className="sign-name">Sign up</p>
            </div>
            <div className="sign-element2">
              <div className="round-circle">2</div>
              <p className="sign-name">Subscribe</p>
            </div>
          </div>
          <p className="plan-heading">Select your subscription plan</p>
          <div className="radio1">
            <div className="indication">offerExpired</div>
            <div className="twoNames">
              <div className="radioButton">
                <input
                  disabled
                  type="radio"
                  value="99"
                  id="expired"
                  name="offerPlan"
                />
                <label htmlFor="expired" className="planTime1">
                  12 Months Subscription
                </label>
              </div>
              <div className="sideAmount">
                <p className="topAmount1">
                  Total <BsCurrencyRupee /> 99
                </p>
                <p className="bottomAmount1">
                  <BsCurrencyRupee />
                  8/mo
                </p>
              </div>
            </div>
          </div>
          {arrayOfOptions.map(o => {
            const {id, value, subscriptionPlan, recommended} = o
            const styling =
              recommended === true
                ? 'recommended-style'
                : 'non-recommended-style'

            const displayRecommend = recommended === true ? 'show' : 'not-show'

            return (
              <div key={id} className={styling}>
                <div className={`indication1 ${displayRecommend}`}>
                  Recommended
                </div>
                <div className="twoNames">
                  <div className="radioButton">
                    <input
                      type="radio"
                      value={value}
                      id="12MonthsPlan"
                      name="offerPlan"
                      onChange={this.onChangeValue}
                    />
                    <label htmlFor="12MonthsPlan" className="planTime">
                      {subscriptionPlan} Months Subscription
                    </label>
                  </div>
                  <div className="sideAmount">
                    <p className="topAmount">
                      Total <BsCurrencyRupee /> {value}
                    </p>
                    <p className="bottomAmount">
                      <BsCurrencyRupee />
                      15/mo
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className="radio3">
            <div className="twoNames">
              <div className="radioButton">
                <input
                  type="radio"
                  value="149"
                  id="6MonthsPlan"
                  name="offerPlan"
                  onChange={this.onChangeValue}
                />
                <label htmlFor="6MonthsPlan" className="planTime">
                  6 Months Subscription
                </label>
              </div>
              <div className="sideAmount">
                <p className="topAmount">
                  Total <BsCurrencyRupee /> 149
                </p>
                <p className="bottomAmount">
                  <BsCurrencyRupee />
                  25/mo
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="radio3">
            <div className="twoNames">
              <div className="radioButton">
                <input
                  type="radio"
                  value="99"
                  id="3MonthsPlan"
                  name="offerPlan"
                  onChange={this.onChangeValue}
                />
                <label htmlFor="3MonthsPlan" className="planTime">
                  3 Months Subscription
                </label>
              </div>
              <div className="sideAmount">
                <p className="topAmount">
                  Total <BsCurrencyRupee /> 99
                </p>
                <p className="bottomAmount">
                  <BsCurrencyRupee />
                  33/mo
                </p>
              </div>
            </div>
          </div> */}

          <div className="line">
            <hr />
          </div>
          <div className="subFee">
            <p className="feeName">Subscription Fee</p>
            <p className="feeAmount">
              <BsCurrencyRupee />
              18,500
            </p>
          </div>
          <div className="offerBox">
            <div className="offerBoxItems">
              <p className="limited">Limited time offer</p>
              <p className="amount">
                -<BsCurrencyRupee />
                18,401
              </p>
            </div>
            <p className="till-last">
              <CgTimer className="timeImage" /> Offer valid till 25th March 2023
            </p>
          </div>
          <div className="total">
            <p className="gst">Total (Incl. of 18% GST)</p>
            <p className="total-amount">
              <BsCurrencyRupee />
              {totalAmount}
            </p>
          </div>
          <div className="cancel-or-pay">
            <button type="button" className="cancel">
              CANCEL
            </button>
            <button type="button" className="pay">
              PROCEED TO PAY
            </button>
          </div>
          <div className="logo-name">
            <p className="payment">
              <BiLockAlt />
              Payments powered by
            </p>
            <img
              src="https://s.yimg.com/fz/api/res/1.2/bbAUHAMAOcohF9uOIyLUNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/35a021d4-22d7-3403-a0ef-66844c16ef77/t_500x300"
              alt="logo"
              className="logo"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainConatiner
