import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { stratOAuthFlow } = useOAuth({ strategy: "oauth_google" })
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await stratOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });

      } else {


      }
    }
    catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/login.png")}
        style={styles.loginImage}
      />
      <TouchableOpacity style={styles.button}
        onPress={onPress}>
        <Text>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: "#000",
  },
});
