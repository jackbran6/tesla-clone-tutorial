import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={"../../assets/images/logo.png"} />
      <Image style={styles.menu} source={"../../assets/images/menu.png"} />
    </View>
  );
};

export default Header;
