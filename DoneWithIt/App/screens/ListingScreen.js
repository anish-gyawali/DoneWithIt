import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "chair for sale",
    price: 100,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "couch for sale",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];
function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,

    backgroundColor: colors.light,
  },
});
export default ListingScreen;
