import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoxCard } from "../_components/Cards";
import TotalWaste from "../../assets/images/TotalWaste.png";
import TotalUser from "../../assets/images/TotalUser.png";
import TotalActive from "../../assets/images/TotalActive.png";
import TotalEWaste from "../../assets/images/TotalEWaste.png";
import TotalDryWaste from "../../assets/images/DryWaste.png";
import TotalWetWaste from "../../assets/images/wetwaste.png";

const Data = () => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <ScrollView className="">
        <View className="flex flex-row justify-between mt-24 mx-2">
          <View className="">
            <BoxCard Icon={TotalUser} Title={"Total User"} Desc={10} />
            <BoxCard
              OtherStyle={"mt-8"}
              Icon={TotalWetWaste}
              Title={"Total Wet Waste"}
              Desc={10}
            />
            <BoxCard
              OtherStyle={"mt-8"}
              Icon={TotalEWaste}
              Title={"Total E-Waste"}
              Desc={10}
            />
          </View>
          <View>
            <BoxCard Icon={TotalActive} Title={"Active User"} Desc={10} />
            <BoxCard
              OtherStyle={"mt-8"}
              Icon={TotalDryWaste}
              Title={"Total Dry Waste"}
              Desc={10}
            />
            <BoxCard
              OtherStyle={"mt-8"}
              Icon={TotalWaste}
              Title={"Total All Waste"}
              Desc={10}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Data;
