import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5 items-center justify-start gap-5">
      <Text className=" text-7xl font-sans-bold  ">HOME</Text>
      <Text className="text-7xl font-bold ">HOME</Text>
      <Text className="bg-background">Holla</Text>
      <Link className="bg-primary text-white" href={"/onboarding"}>
        Onboarding
      </Link>
      <Link
        className="w-full border p-5 bg-primary text-white text-2xl text-center rounded-3xl"
        href={"/(auth)/sign-in"}
      >
        Sign-in
      </Link>
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
