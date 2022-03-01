import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <View style={styles.navbar}>
      <View></View>
      <View>
        <Text style={styles.navbarTitle}>Colleague</Text>
      </View>
      <TouchableOpacity style={styles.navBtn} activeOpacity={0.5}>
        <Icon
          name="stats-chart-outline"
          type="ionicon"
          size={20}
          color="#2d3436"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "8%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  navbarTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2d3436",
  },
  subtitle: {
    fontSize: 11,
  },
  navBtn: {
    backgroundColor: "rgba(0,0,0,.15)",
    padding: 10,
    borderRadius: 10,
  },
});

export default Navbar;
