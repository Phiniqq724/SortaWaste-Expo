import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "JakartaSans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "JakartaSans-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "JakartaSans-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "JakartaSans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "JakartaSans-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "JakartaSans-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "JakartaSans-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    return () => {};
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 justify-center items-center text-">
      <Text className="font-jktregular">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
