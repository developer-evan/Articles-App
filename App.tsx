import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    const expiryTime = await AsyncStorage.getItem("expiryTime");
    if (token && expiryTime) {
      const currentTime = Date.now();
      if (currentTime < parseInt(expiryTime)) {
        // Token is valid, navigate to Home
        return;
      } else {
        // Token expired, clear token and navigate to Login
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("expiryTime");
        await AsyncStorage.removeItem("user");
      }
    }
    // No token found, navigate to Login
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Text style={{ color: "white" }}>Home</Text>,
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#0F172A",
            },
            headerTintColor: "white",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {}}
                style={{ marginLeft: 15 }}
              ></TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => {}} style={{ marginRight: 15 }}>
                <Ionicons name="log-out-outline" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
