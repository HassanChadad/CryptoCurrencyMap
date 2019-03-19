import React from "react";
import { View, ActivityIndicator } from "react-native";

/**
 * A Spinner component to show loading spinner
 * @param {*} props 
 */
const Spinner = props => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator color='black' size='large'/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

export { Spinner };
