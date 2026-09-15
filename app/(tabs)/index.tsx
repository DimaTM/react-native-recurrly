import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5 items-center">
      <Text className="text-xl font-bold text-blue-500 border border-red-600 p-20">
        Welcome to Nativewind!
      </Text>
      <Text className="bg-background">Holla</Text>
      <Link className="bg-primary text-white" href={"/onboarding"}>
        Onboarding
      </Link>
      <Link href={"/(auth)/sign-in"}>Sign-in</Link>
      <Link href={"/(auth)/sign-up"}>Sign-up</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude
      </Link>
    </SafeAreaView>
  );
}
