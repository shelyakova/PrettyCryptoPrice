import React, { Component } from "react";
import axios from "axios";
import Select from 'react-select';

const options = [
  { value: 'USD', label: 'USD', icon: '$' },
  { value: 'EUR', label: 'EUR', icon: '€' },
  { value: 'RUB', label: 'RUB', icon: '₽' },
  { value: 'GBP', label: 'GBP', icon: '₴' }
];

class App extends Component {
  state = {
    currency: "EUR",
    cryptos: [],
    selectedOption: { value: 'GBP', label: 'GBP', icon: '₴' }
  };

  getData(currency) {
    axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC'+currency)
    .then(res => {
      const cryptos = res.data;
      this.setState({cryptos: cryptos});
      console.log(cryptos.changes.price.day);
    })
  }


  render() {
    const { selectedOption, cryptos } = this.state;
      return (
              <div>
                <Select
                  value={selectedOption}
                  onChange={(selectedOption) => {
                    this.setState({ selectedOption });
                    this.getData(selectedOption.value);
                  }}
                  options={options}
                />
                <div>
                  <b>BTC</b>
                  <br />

                  <label>Current price:</label>
                  {cryptos.ask}
                  {cryptos.ask && selectedOption.icon}
                  <br />

                  <label>Hour change:</label>
                  {cryptos.ask && cryptos.changes.price.hour}
                  <br />

                  <label>Day change:</label>
                  {cryptos.ask && cryptos.changes.price.day}
                  <br />

                  <label>Week change:</label>
                  {cryptos.ask && cryptos.changes.price.week}
                  <br />

                  <label>Month change:</label>
                  {cryptos.ask && cryptos.changes.price.month}
                  <br />

                </div>
              </div>
            );
          }
        }


export default App;
