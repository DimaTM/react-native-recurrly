import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 border border-red-600 p-20">
        Welcome to Nativewind!
      </Text>
      <Text className="bg-background">Holla</Text>
      <Link className="bg-primary text-white" href={"/onboarding"}>
        Onboarding
      </Link>
      <Link href={"/(auth)/sign-in"}>Sign-in</Link>
      <Link href={"/(auth)/sign-up"}>Sign-up</Link>
      <Link href={"/subscriptions/spotify"}>Spotify subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude
      </Link>
    </View>
  );
}
