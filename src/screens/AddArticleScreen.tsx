import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { articlesData, categoriesData } from "../utils/data";
import { useNavigation } from "@react-navigation/native";

const AddArticleScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const handleCreateArticle = async () => {
    try {
      if (!validateFields()) {
        return;
      }

      const newArticle = {
        id: Math.random().toString(),
        title,
        content,
        category,
        userId: "",
      };

      articlesData.push(newArticle);
      await AsyncStorage.setItem("articles", JSON.stringify(articlesData));

      setTitle("");
      setContent("");
      setCategory("");

     
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  const validateFields = () => {
    if (!title.trim() || !content.trim() || !category.trim()) {
      Alert.alert("Error", "All fields are required");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Content"
        onChangeText={setContent}
        value={content}
        multiline
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Select Category" value="" />
        {categoriesData.map((cat) => (
          <Picker.Item key={cat.id} label={cat.name} value={cat.name} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleCreateArticle}>
        <Text style={{ color: "white", textAlign: "center" }}>
          Create Article
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  picker: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    backgroundColor: "#0F172A",
    padding: 15,
    borderRadius: 5,
  },
});

export default AddArticleScreen;
