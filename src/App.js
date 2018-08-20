import React, { Component } from "react";

import axios from "axios";
import Select from 'react-select';
import CryptoCurrency from './CryptoCurrency.js';
import './App.css';

const options = [
  { value: 'USD', label: 'USD', icon: '$' },
  { value: 'EUR', label: 'EUR', icon: '€' },
  { value: 'RUB', label: 'RUB', icon: '₽' },
  { value: 'GBP', label: 'GBP', icon: '₴' }
];

const customStyles = {
  option: (base, state) => ({
    ...base,
    background: 'none',
    color: 'white',
    ':hover': {
      color: '#79cdff'
    },
    ':active': {
      background: '#2a5269',
      opasity: '0,5'
    }
  }),
  singleValue: (base, state) => ({
    ...base,
    color: 'white',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#79cdff',
    ':hover': {
      color: '#79cdff'
    }
  }),
  menu: (base, state) => ({
    ...base,
    color: '#79cdff',
    background: '#0f1e27',
    border: '#79cdff 1px solid'
  }),
  control: (base, state) => ({
    ...base,
    border: '#79cdff 1px solid',
    color: '#79cdff',
    background: '#0f1e27',
    ':hover': {
      border: '#79cdff 1px solid'
    }
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    border: '#79cdff 1px solid',
  })
}

class App extends Component {
  state = {
    ETH: [],
    LTC: [],
    BTC: [],
    selectedOption: { value: 'GBP', label: 'GBP', icon: '₴' },
    cryptoCurrencies: {
      Ethereum: 'ETH',
      Litecoin: 'LTC',
      Bitcoin: 'BTC'
    }
  };

  getData(crypto, currency) {
    axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/'
    + crypto
    + currency)
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      crypto === 'BTC' && this.setState({BTC: cryptos});
      crypto === 'LTC' && this.setState({LTC: cryptos});
      crypto === 'ETH' && this.setState({ETH: cryptos});
    })
  }

  render() {
    const { selectedOption } = this.state;
      return (
              <div className="container">
                <div className="head">
                  <div className="headText">
                    Select currency to exchange:
                  </div>
                  <div className="selectCurrency">
                    <Select
                      value={selectedOption}
                      onChange={(selectedOption) => {
                        this.setState({ selectedOption });
                        Object.values(this.state.cryptoCurrencies).map((item, key) => {
                          return this.getData(item, selectedOption.value);
                        });
                      }}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="crytosPosition">
                  <div className='Ethereum'>
                    <CryptoCurrency
                      name='Ethereum'
                      crypto={this.state.ETH}
                      icon={this.state.selectedOption.icon}
                    />
                  </div>
                  <div className="Litecoin">
                    <CryptoCurrency
                      name='Litecoin'
                      crypto={this.state.LTC}
                      icon={this.state.selectedOption.icon}
                    />
                  </div>
                  <div className="Bitcoin">
                    <CryptoCurrency
                      name='Bitcoin'
                      crypto={this.state.BTC}
                      icon={this.state.selectedOption.icon}
                    />
                  </div>
                </div>
              </div>
            );
          }
        }


export default App;
