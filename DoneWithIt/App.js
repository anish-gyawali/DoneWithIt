import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading, Notifications } from "expo";

import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthNavigator from "./App/navigation/AuthNavigator";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";
import { navigationRef } from "./App/navigation/rootNavigation";
import ContactSellerForm from "./App/components/ContactSellerForm";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
