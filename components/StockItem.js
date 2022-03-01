import React from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text } from "react-native";
import NumberFrmat from "./NumberFrmat";

const StockItem = ({ stockData }) => {
  return (
    <TouchableNativeFeedback
      activeOpacity={0.5}
      onPress={() => console.log("I read")}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {stockData.item_description}
          </Text>
          <Text style={styles.subtitle}>{stockData.item_qty} items left</Text>
        </View>
        <View style={styles.badgeContainer}>
          <NumberFrmat value={stockData.item_price} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  titleContainer: {
    width: "80%",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "300",
  },
  badgeContainer: {
    width: "25%",
  },
  badge: {
    fontSize: 10,
    backgroundColor: "rgba(0,0,0,.15)",
    padding: 8,
    borderRadius: 10,
    color: "#222",
  },
});

export default StockItem;
