import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Card from './common/Card'
import { Spinner } from './common/Spinner';

/**
 * Main Component that calls the API to get the Top 10 Coin data and renders the whole page.
 */
class MainContainer extends Component {

  /**
   * A function that calls the GetData function from the Action (Redux)
   */
  componentWillMount() {
    this.props.onRequestCoins();
  }

  /**
   * A function that gets the crypto data from the Reducer (Redux) and iterate through it and
   * create Card components.
   */
  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin) =>
      <Card
        key={coin.CoinInfo.Id}
        name={coin.CoinInfo.Name}
        full_name={coin.CoinInfo.FullName}
        image_url={"https://www.cryptocompare.com/"+coin.CoinInfo.ImageUrl}
        price_usd={coin.RAW.USD.PRICE}
        change_24h={coin.RAW.USD.CHANGE24HOUR}
      />
    )
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        <View style={{flex:1}}>        
          <Spinner/>
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 50
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestCoins: () => dispatch({ type: 'GET_DATA' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);