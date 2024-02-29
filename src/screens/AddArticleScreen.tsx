import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { articlesData } from '../utils/data';

const AddArticleScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleCreateArticle = async () => {
    try {
      const userId = '123';      
      const newArticle = {
        id: Math.random().toString(),
        title,
        content,
        category,
        userId,
      };

      
      articlesData.push(newArticle);

      await AsyncStorage.setItem('articles', JSON.stringify(articlesData));

      setTitle('');
      setContent('');
      setCategory('');
    } catch (error) {
      console.error(error);
    }
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
        style={styles.input}
        placeholder="Content"
        onChangeText={setContent}
        value={content}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        onChangeText={setCategory}
        value={category}
      />
      {/* <Button title="Create Article" onPress={handleCreateArticle}  /> */}
      <TouchableOpacity style={styles.button} onPress={handleCreateArticle}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Create Article</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#00B5E2',
    padding: 15,
    borderRadius: 5,
  },
});

export default AddArticleScreen;
