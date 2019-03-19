import React, { Component } from "react";
import { LineChart } from 'react-native-svg-charts';
import axios from 'axios';

/**
 * Line Chart Component that calls an API to get the last 75 Historical Prices for a specific symbol and loads
 * it into an array. Then it shows the array in a line chart.
 * 
 * The component uses a state because its state is independent from the whole app, so there is no need
 * to add it to the redux because this component is the only component using it and adding it to the redux
 * will only waste time writing the function and Reducer for it.
 */
class Chart extends Component {

  state = {
    data: [0,0,0,0,0,0,0,0,0,0,0,0]
  }

  /**
   * A function that gets the symbol from props (Card component) and calls an API to get the last 75 records
   * for the coin. Then it parses the response and adds the data to an array and updates the state.
   */
  componentDidMount(){
    const symbol = this.props.symbol;
    axios
        .get("https://min-api.cryptocompare.com/data/histoday?fsym="+symbol+"&tsym=USD&limit=75")
        .then(
          function(response) {
            const allData = response.data.Data;
            const data = [];
            for (var i = 0; i < allData.length; i++) {
              const avgPrice = (allData[i].high + allData[i].low)/2;
              data.push(avgPrice);
            }
            this.setState({data});
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Couldn't get the data! Try Again.");
        });

  }

  render() {
    return (
      <LineChart
          style={{ height: 100, width: 100 }}
          data={ this.state.data }
          svg={{ stroke: this.props.color}}
          contentInset={{ top: 20, bottom: 20 }}
      />
      )
  }
}
export default Chart;
