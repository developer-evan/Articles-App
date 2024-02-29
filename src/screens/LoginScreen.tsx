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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usersData } from "../utils/data";

const LoginScreen: React.FC = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async (username: string, password: string) => {
    const foundUser = usersData.find(
      (user: User) => user.username === username && user.password === password
    );

    if (foundUser) {
      const token = Math.random().toString(36).substring(7);
      const expiryTime = Date.now() + 3600 * 1000; 
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("expiryTime", expiryTime.toString());
      await AsyncStorage.setItem("user", JSON.stringify(foundUser));
      
      alert("Login successful");
      navigation.navigate("Home"); 
    } else {
      alert("Invalid username or password");
    }
  };

  const onLoginPress = () => {
    handleLogin(username, password);
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
            <Ionicons name="person" size={18} color="#0F172A" />
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
            <Ionicons name="lock-closed" size={18} color="#0F172A" />
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
              color="#0F172A"
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
    color: "#0F172A",
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
    borderBottomColor: "#0F172A",
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
    borderBottomColor: "#0F172A",
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
    backgroundColor: "#0F172A",
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
