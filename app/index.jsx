import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, RouterButton } from "./_components/Button";
import Logo from "../assets/images/Logo.png";
import { Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

const index = () => {
  const loginHandler = () => {
    router.push("home");
  };
  return (
    <SafeAreaView className="h-screen bg-white">
      <View className="items-center my-auto z-50 justify-between">
        <Image source={Logo} resizeMode="contain" className="fixed" />
      </View>
      <View className="z-50 justify-center items-center bottom-20">
        <CustomButton
          title={"Get Started"}
          handlePress={loginHandler}
          containerStyles={"max-w-[265px]"}
        />
      </View>
      <View className="absolute">
        <View>
          <Svg
            width="430"
            height="97"
            viewBox="0 0 430 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M0 0H430V44C70.0101 13.1036 18.1226 24.8718 0 97V0Z"
              fill="#57C4E5"
            />
          </Svg>
          <Svg
            width="430"
            height="267"
            viewBox="0 0 430 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M-20.4562 34.3471C301.126 64.2079 421.405 63.1193 430 0L430 130.412C111.489 254.486 -63.897 321.973 -20.4562 210.376V34.3471Z"
              fill="#D1D646"
            />
          </Svg>
        </View>
        <View className="mt-80">
          <Svg
            width="430"
            height="141"
            viewBox="0 0 430 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M0 55.5C271.394 100.273 405.053 113.494 430 0V141H0V55.5Z"
              fill="#F97068"
            />
          </Svg>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
