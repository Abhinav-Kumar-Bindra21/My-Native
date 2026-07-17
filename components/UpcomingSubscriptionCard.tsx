import { formatCurrency } from "@/lib/utils";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const UpcomingSubscriptionCard = ({ name, price, daysLeft, icon, currency }: UpcomingSubscription) => {
  return (
    <View className="mr-4 w-44 rounded-2xl border border-black/10 bg-background p-4">
      <View className="flex-row items-center gap-3">
        <Image source={icon} className="size-14" />
        <View>
          <Text className="text-lg font-sans-bold">{formatCurrency(price, currency)}</Text>
          <Text className="text-sm font-sans-semibold text-muted-foreground" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "last day"}
          </Text>
        </View>
      </View>
      <Text className="mt-2 text-lg font-sans-bold text-primary">{name}</Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
