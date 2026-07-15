import { Link, useLocalSearchParams } from "expo-router";

import { Text, View } from "react-native";

const subscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>subscription Details :{id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default subscriptionDetails;
