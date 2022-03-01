import React, { useEffect } from "react";
import { View, Text } from "react-native";
import StockItem from "./StockItem";

const Stock = ({ getData, setData, dataList }) => {
  useEffect(() => {
    getData("https://api.psycho-tech.co.za/backend/api/stock/read.php").then(
      (res) => setData(res)
    );
    return () => {
      setData([]);
    };
  }, []);
  return (
    <View>
      {dataList.map((dataItem) => (
        <StockItem key={dataItem.item_barcode} stockData={dataItem} />
      ))}
    </View>
  );
};

export default Stock;
