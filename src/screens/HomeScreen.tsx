import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const storedArticles = await AsyncStorage.getItem('articles');
        if (storedArticles) {
          setArticles(JSON.parse(storedArticles));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  const renderArticle = ({ item }: { item: any }) => (
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      <Text>Category: {item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
      />
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
});

export default HomeScreen;
