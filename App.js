import { useState } from "react";
import {
  Dimensions,
  NativeModules,
  ActivityIndicator,
  View,
} from "react-native";
import Main from "./components/Main";
import NavBottom from "./components/NavBottom";

export default function App() {
  const { StatusBarManager } = NativeModules;
  const statusHeight = StatusBarManager.HEIGHT;
  const windowHeight = Dimensions.get("window").height;
  const hheight = windowHeight - statusHeight;

  const [navbar, setNavbar] = useState("stock");
  const [isLoading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const jsonData = await res.json();

      return jsonData;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        height: hheight,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Main navbar={navbar} getData={getData} />
      <NavBottom navbar={navbar} setNavbar={setNavbar} />
    </View>
  );
}
