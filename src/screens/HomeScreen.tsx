import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { articlesData, usersData } from '../utils/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Article } from '../utils/types'; 
import { fetchUser } from '../utils';
import { Entypo } from '@expo/vector-icons';



const HomeScreen = ({ navigation }: any) => {  

  const [articles, setArticles] = useState<Article[]>([]);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetchUser({ setUser });
  }, []);

  const renderArticle = ({ item }: { item: Article }) => (
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text
      style={
        {
          color: 'gray',
          marginBottom: 5,
        }
      }
      >Category: {item.category}</Text>
      <Text>{item.content}</Text>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articlesData}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddArticle')}>
        <Entypo name="plus" size={35} color="white" />
      </TouchableOpacity>
      {/* <View style={styles.buttonContainer}>
        <Button
          title="Add Article"
          onPress={() => navigation.navigate('AddArticle')}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  articleContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 20, // Adjusted the position of the button
    backgroundColor: '#0F172A',
    borderRadius: 50,
    padding: 10,
    elevation: 7,
  },
});

export default HomeScreen;
