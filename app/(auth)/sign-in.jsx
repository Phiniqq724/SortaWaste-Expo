import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/Logo.png";
import { Image } from "react-native";
import FormField from "../_components/FormField";
import { CustomButton } from "../_components/Button";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View className="items-center">
          <Image source={Logo} resizeMode="contain" />
        </View>
        <Text className="text-center font-jktbold text-2xl text-dark">
          Log In
        </Text>
        <View className="mx-4">
          <FormField title={"Email"} />
          <FormField title={"Password"} otherStyles={"mt-4"} />
          <CustomButton title={"Log In"} containerStyles={"mt-8"} />
          <Text className="text-center mt-8 font-jktregular text-dark">
            Don't have any account?{" "}
            <Link href={"/sign-up"} className="text-red font-jktmedium">
              Sign Up
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default SignIn;
