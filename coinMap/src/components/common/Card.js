import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Chart from './Chart';

/**
 * Stylesheet for the Card component
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
    paddingBottom:10
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10
  },
  coinSymbol: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  coinName: {
    fontSize: 13,
    marginTop: 10,
    color: '#afafaf'
  },
  coinPrice: {
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 10,
    marginRight:10,
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    marginTop: 20,
    width: 30,
    height: 30
  },
  positivePrice: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#7bd191',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#7bd191',
    height: 31,
    width: 100
  },
  negativePrice: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#ef7f61',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#ef7f61',
    height: 31,
    width: 100
  }
});

const {
    container,
    image,
    coinSymbol,
    coinName,
    nameContainer,
    coinPrice,
    positivePrice,
    negativePrice,
} = styles;

/**
 * Card Component that receives props from MainContainer and fills its children with the appropriate data
 * @param {*} param0 
 */
const Card = ({ name, full_name, image_url,  price_usd, change_24h }) => {
  return (
    <View style={container}>
        <Image style={image} source={{ uri: image_url}} />
        <View style={nameContainer}>
          <Text style={coinSymbol}>{name}</Text>
          <Text style={coinName}>{full_name}</Text>
        </View>
        <Chart symbol={name} color={change_24h < 0 ? '#ef7f61' : '#7bd191'}/>
        <View style={change_24h < 0 ? negativePrice : positivePrice }> 
          <Text style={coinPrice}>${price_usd}</Text>
        </View>
    </View>
  )
};

export default Card;