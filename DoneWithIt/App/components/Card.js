import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./Text";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
