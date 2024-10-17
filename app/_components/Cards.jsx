import { View, Text, Image } from "react-native";
import React from "react";

export const LongCard = ({ OtherStyle, Icon, Title, Desc }) => {
  return (
    <View
      className={`w-full h-28 items-center bg-light rounded-xl border border-gray-300 shadow-md shadow-gray-400 flex-row justify-between  ${OtherStyle}`}
    >
      <View>
        <Text className="font-jktsemibold text-lg text-dark ml-5">{Title}</Text>
        <Text className="font-jktregular text-lg text-dark ml-5 ">{Desc}</Text>
      </View>
      <Image source={Icon} resizeMode="contain" className="w-24 h-24" />
    </View>
  );
};

export const BoxCard = ({ OtherStyle, Icon, Title, Desc }) => {
  return (
    <View
      className={`w-40 h-40 justify-center bg-light items-center rounded-xl border border-gray-300 shadow-md shadow-gray-400 ${OtherStyle}`}
    >
      <Image source={Icon} resizeMode="contain" className="w-16 h-16" />
      <View className="items-center">
        <Text className="font-jktsemibold text-lg text-dark mt-5">{Title}</Text>
        <Text className="font-jktregular text-lg text-dark ">{Desc}</Text>
      </View>
    </View>
  );
};
