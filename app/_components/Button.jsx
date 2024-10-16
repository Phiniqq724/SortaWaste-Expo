import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-red rounded-xl w-full h-11 justify-center items-center  ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-white font-jktsemibold text-md ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
