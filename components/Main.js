import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Stock from "./Stock";
import Orders from "./Orders";
import Sales from "./Sales";
import Summary from "./Summary";

const Main = ({ navbar, getData }) => {
  const [dataList, setList] = useState([]);
  return (
    <ScrollView style={styles.container}>
      {navbar == "stock" && (
        <Stock getData={getData} setData={setList} dataList={dataList} />
      )}
      {navbar == "orders" && <Orders />}
      {navbar == "sales" && <Sales />}
      {navbar == "summary" && <Summary />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "82%",
    position: "absolute",
    top: "8%",
    width: "100%",
    paddingVertical: 20,
  },
});

export default Main;
