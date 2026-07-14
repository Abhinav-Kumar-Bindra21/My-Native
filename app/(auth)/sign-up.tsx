import { Link } from "expo-router";
import { Text, View } from "react-native";

const signUn = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href={"/(auth)/sign-in"}>Sign In</Link>
    </View>
  );
};

export default signUn;
