import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyleButton";
import styles from "./styles";

const carItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButton type="primary" />
    </View>
  );
};

export default carItem;
