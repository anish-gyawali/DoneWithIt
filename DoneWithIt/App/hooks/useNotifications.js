import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permission from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifactions = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push Notification", error);
    }
  };
};
