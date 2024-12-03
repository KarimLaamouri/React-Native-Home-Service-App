import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/tabNavigation";
import { createStackNavigator } from '@react-navigation/stack';
import CategoryBusinessList from "./app/screens/CategoryBusinessList/CategoryBusinessList";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
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
