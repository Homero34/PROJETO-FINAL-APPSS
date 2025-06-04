import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const CustomDrawerContent = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user?.email || 'Guest'}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={logout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  userInfo: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  userName: { fontSize: 16, fontWeight: 'bold' },
  drawerItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});

export default CustomDrawerContent; 