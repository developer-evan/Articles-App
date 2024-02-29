import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AddArticleScreen from "./src/screens/AddArticleScreen";

const Stack = createStackNavigator();

export default function App() {
  const handleLogin = (username: string, password: string, navigation: any) => {
    // Hardcoded example login
    const exampleUsername = "user123";
    const examplePassword = "pass123";

    if (username === exampleUsername && password === examplePassword) {
      // Here you can handle the login success logic, such as storing the authentication token
      // console.log("Login successful");
      alert("Login successful");
      // For example, you might want to navigate to the Home screen upon successful login
      navigation.navigate("Home");
    } else {
      // console.log("Invalid username or password");
      alert("Invalid username or password");
      // Here you can handle the login failure logic, such as showing an error message
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} handleLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen
        options={{ headerShown: false }}
         name="Home"
          component={HomeScreen} />
        <Stack.Screen name="AddArticle" component={AddArticleScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
