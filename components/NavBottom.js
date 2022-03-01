import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

const NavBottom = ({ navbar, setNavbar }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.tabs}
        activeOpacity={0.5}
        onPress={() => setNavbar("stock")}
      >
        <View>
          {navbar == "stock" ? (
            <View>
              <Icon name="list" type="ionicon" color="#05be70" />
              <Text>Stock</Text>
            </View>
          ) : (
            <View>
              <Icon name="list-outline" type="ionicon" color="#2d3436" />
              <Text>Stock</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabs}
        activeOpacity={0.5}
        onPress={() => setNavbar("orders")}
      >
        <View>
          {navbar == "orders" ? (
            <View>
              <Icon name="swap-vertical" type="ionicon" color="#05be70" />
              <Text>Orders</Text>
            </View>
          ) : (
            <View>
              <Icon
                name="swap-vertical-outline"
                type="ionicon"
                color="#2d3436"
              />
              <Text>Orders</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabs}
        activeOpacity={0.5}
        onPress={() => setNavbar("sales")}
      >
        <View>
          {navbar == "sales" ? (
            <View>
              <Icon name="layers-outline" type="ionicon" color="#05be70" />
              <Text>Sales</Text>
            </View>
          ) : (
            <View>
              <Icon name="layers-outline" type="ionicon" color="#2d3436" />
              <Text>Sales</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabs}
        activeOpacity={0.5}
        onPress={() => setNavbar("summary")}
      >
        <View>
          {navbar == "summary" ? (
            <View>
              <Icon name="analytics" type="ionicon" color="#05be70" />
              <Text>Summary</Text>
            </View>
          ) : (
            <View>
              <Icon name="analytics-outline" type="ionicon" color="#2d3436" />
              <Text>Summary</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "10%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navbarTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2d3436",
  },
  tabs: {
    flex: 1,
    alignItems: "center",
  },
});

export default NavBottom;
