import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/tabNavigation";
import { createStackNavigator } from '@react-navigation/stack';
import CategoryBusinessList from "./app/screens/CategoryBusinessList/CategoryBusinessList";
import BusinessDetails from "./app/screens/BusinessDetails/BusinessDetails";
import WelcomeScreen from "./app/screens/WelcomeScreen/WelcomeScreen";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainTab"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CategoryBusinessList"
            component={CategoryBusinessList}
            options={({ route }) => ({
              title: route.params.categoryName,
              headerTitleStyle: {
                fontWeight: '600',
              },
            })}
          />
          <Stack.Screen
            name="BusinessDetails"
            component={BusinessDetails}
            options={{
              title: "Business Details",
              headerTitleStyle: {
                fontWeight: '600',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
