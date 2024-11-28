import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/LoginScreen/login"; // Assuming the filename is 'login.js'
import HomeScreen from "./app/screens/HomeScreen/homeScreen";
import TabNavigation from "./app/navigations/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <TabNavigation/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
