import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usersData } from "../utils/data";

// interface LoginScreenProps {
//   handleLogin: (username: string, password: string, navigation: any) => void;
// }

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const handleLogin = async (username: string, password: string, navigation: any) => {
    const foundUser = usersData.find(
      (user: User) => user.username === username && user.password === password
    );


    if (foundUser) {
      // AsyncStorage.setItem("user", JSON.stringify(foundUser));
      await AsyncStorage.setItem('user', JSON.stringify(foundUser));
      console.log(foundUser, "foundUser");
      alert("Login successful");
      navigation.navigate("Home");
    } else {
      alert("Invalid username or password");
    }
  };

  const onLoginPress = () => {
    handleLogin(username, password, navigation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Artics</Text>
        <Text style={{ marginTop: 2, marginBottom: 30, fontSize: 20 }}>
          Welcome back. Login to continue.
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={18} color="#00B5E2" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={18} color="#00B5E2" />
          </View>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.showHideButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={18}
              color="#00B5E2"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    paddingTop: 130,
  },
  text: {
    fontSize: 30,
    color: "#00B5E2",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderBottomWidth: 1,
    borderBottomColor: "#00B5E2",
  },
  iconContainer: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    color: "#000",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderBottomWidth: 1,
    borderBottomColor: "#00B5E2",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    color: "#000",
  },
  showHideButton: {
    padding: 10,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: "#00B5E2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default LoginScreen;
