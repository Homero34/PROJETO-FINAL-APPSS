import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import {useAuth} from '../hooks/useAuth';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const DashboardScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from API
        const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const apiData = await apiResponse.json();
        
        // Fetch user-specific data from Firestore
        const q = query(collection(db, 'userData'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map(doc => doc.data());
        
        setItems(apiData.slice(0, 10)); // Just show first 10 items
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={1}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  title: { fontWeight: 'bold', marginBottom: 5 }
});

export default DashboardScreen;