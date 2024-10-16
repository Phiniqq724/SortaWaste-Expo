import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/Logo.png";
import { Image } from "react-native";
import FormField from "../_components/FormField";
import { CustomButton } from "../_components/Button";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center">
          <Image source={Logo} resizeMode="contain" />
        </View>
        <Text className="text-center font-jktbold text-2xl text-dark">
          Sign Up
        </Text>
        <View className="mx-4">
          <FormField title={"Username"} />
          <FormField title={"Email"} otherStyles={"mt-4"} />
          <FormField title={"Password"} otherStyles={"mt-4"} />
          <CustomButton title={"Sign Up"} containerStyles={"mt-8"} />
          <Text className="text-center mt-8 font-jktregular text-dark">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-red font-jktmedium">
              Log In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
