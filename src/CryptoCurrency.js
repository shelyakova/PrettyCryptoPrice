import React, { Component } from "react";
import Switch from "react-switch";
import './App.css';
import icon from './images/icon.png';


class CryptoCurrency extends Component {
  state = {
    checked: false
  };

  render() {
    const { crypto } = this.props;
      return (
              <div>
                <div>
                  <div>
                  <label>{this.props.name}</label>
                  <div className="image">
                  </div>
                  <div className="price">
                    <b>
                      <div className="priceText">
                        <label>Current price:</label>
                      </div>
                      <div className="priceNumber">
                        {crypto.ask}
                        {crypto.ask && this.props.icon}
                      </div>
                    </b>
                  </div>

                  <div className="switch">
                    <div className="switchName">
                      <label>
                        {this.state.checked === false ?
                          'Percent change' : 'Price change'}
                      </label>
                    </div>
                    <div className="switchButton">
                      <label htmlFor="normal-switch">
                        <Switch
                          onChange={() => {
                            this.state.checked === false ?
                            this.setState({checked: true}) :
                            this.setState({checked: false});
                          }}
                          checked={this.state.checked}
                          onColor="#3eb3ef"
                          handleDiameter={20}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          offColor="#bebebe"
                          onColor="#3db0ea"
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={15}
                          width={40}
                          className="react-switch"
                          id="normal-switch"
                        />
                      </label>
                    </div>
                  </div>

                  <table>
                    <tr>
                      <td className="textName">
                        <label>Hour change:</label>
                      </td>
                      <td className={
                        crypto.ask && crypto.changes.percent.hour < 0 ?
                        'plusPrice' : 'minusPrice'
                      }>
                        {crypto.ask && crypto.changes.percent.hour > 0 &&
                          '+'}
                        {crypto.ask && this.state.checked === false &&
                           crypto.changes.percent.hour+'%'}
                        {crypto.ask && this.state.checked === true &&
                            crypto.changes.price.hour+this.props.icon}
                      </td>
                    </tr>
                    <tr>
                      <td className="textName">
                        <label>Day change:</label>
                      </td>
                      <td className={
                        crypto.ask && crypto.changes.percent.day < 0 ?
                        'plusPrice' : 'minusPrice'
                      }>
                        {crypto.ask && crypto.changes.percent.day > 0 &&
                          '+'}
                        {crypto.ask && this.state.checked === false &&
                         crypto.changes.percent.day+'%'}
                        {crypto.ask && this.state.checked === true &&
                          crypto.changes.price.day+this.props.icon}
                      </td>
                    </tr>
                    <tr>
                      <td className="textName">
                        <label>Week change:</label>
                      </td>
                      <td className={
                        crypto.ask && crypto.changes.percent.week < 0 ?
                        'plusPrice' : 'minusPrice'
                      }>
                        {crypto.ask && crypto.changes.percent.week > 0 &&
                          '+'}
                        {crypto.ask && this.state.checked === false &&
                         crypto.changes.percent.week+'%'}
                        {crypto.ask && this.state.checked === true &&
                          crypto.changes.price.week+this.props.icon}
                      </td>
                    </tr>
                    <tr>
                      <td className="textName">
                        <label>Month change:</label>
                      </td>
                      <td className={
                        crypto.ask && crypto.changes.percent.month < 0 ?
                        'plusPrice' : 'minusPrice'
                      }>
                        {crypto.ask && crypto.changes.percent.month > 0 &&
                          '+'}
                        {crypto.ask && this.state.checked === false &&
                           crypto.changes.percent.month+'%'}
                        {crypto.ask && this.state.checked === true &&
                            crypto.changes.price.month+this.props.icon}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              </div>
            );
          }
        }


export default CryptoCurrency;
