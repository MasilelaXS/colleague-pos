import React from "react";
import { StyleSheet, Text } from "react-native";
import NumberFormat from "react-number-format";

const NumberFrmat = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"R"}
      renderText={(formattedValue) => (
        <Text style={styles.price}>{formattedValue}</Text>
      )} // <--- Don't forget this!
    />
  );
};

const styles = StyleSheet.create({
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#A2A9B0",
  },
});

export default NumberFrmat;
