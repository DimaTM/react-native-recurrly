import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Link href={"/(auth)/sign-in"}>Go IN</Link>
    </View>
  );
};

export default SignUp;
