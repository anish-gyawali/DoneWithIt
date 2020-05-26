import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./Text";

function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <AppText style={styles.text}>{props.item.label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
