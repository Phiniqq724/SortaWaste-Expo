import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OrangTransparent from "../../assets/images/Orang_Transparent.png";
import { LongCard } from "../_components/Cards";
import UserIcon from "../../assets/images/User.png";
import TrashIcon from "../../assets/images/Trash.png";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-screen justify-between">
      <View id="header" className="items-center top-20">
        <Image source={OrangTransparent} />
        <Text className="font-jktregular text-md text-dark">Welcome back!</Text>
        <Text className="font-jktsemibold text-xl text-red">Admin</Text>
      </View>
      <View className="bg-light -bottom-44 rounded-3xl border h-full border-gray-300">
        <View className="mx-4">
          <LongCard
            OtherStyle={"mt-14"}
            Icon={UserIcon}
            Title={"Total User"}
            Desc={"100"}
          />
          <LongCard
            OtherStyle={"mt-5"}
            Icon={TrashIcon}
            Title={"Total Trash"}
            Desc={"100"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
