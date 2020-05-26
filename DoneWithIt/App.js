import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import ListingDetailsScreen from "./App/screens/ListingDetailsScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./App/components/Text";
import AppButton from "./App/components/Button";
import Card from "./App/components/Card";
import MessageScreen from "./App/screens/MessageScreen";
import Screen from "./App/components/Screen";
import Icon from "./App/components/Icon";
import ListItem from "./App/components/lists/ListItem";
import AccountScreen from "./App/screens/AccountScreen";
import ListingScreen from "./App/screens/ListingScreen";
import AppTextInput from "./App/components/TextInput";
import AppPicker from "./App/components/Picker";
import LoginScreen from "./App/screens/LoginScreen";
import ListingEditScreen from "./App/screens/ListingEditScreen";
import RegisterScreen from "./App/screens/RegisterScreen";

export default function App() {
  return <ListingEditScreen />;
}
