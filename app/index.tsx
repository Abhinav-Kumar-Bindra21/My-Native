import "@/global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Welcome to Nativewind!</Text>
      <Text className="text-3xl font-bold text-red-600">My name is Abhinav</Text>
    </View>
  );
}
