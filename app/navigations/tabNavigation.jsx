import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreen/profileScreen'
import BookingScreen from '../screens/BookingScreen/BookingScreen'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen/homeScreen'
import Colors from '../screens/Utils/Colors'

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          )
        }} />
      <Tab.Screen name='Booking' component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={24} color={color} />
          )
        }} />
      <Tab.Screen name='Profile' component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={24} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}