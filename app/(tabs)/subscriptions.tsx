import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
  return (
    <View>
      <Text>subscriptions</Text>
    </View>
  );
};

export default subscriptions;
