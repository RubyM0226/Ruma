// App.js
import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import ForumScreen from './screens/ForumScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userJson = await AsyncStorage.getItem('currentUser');
      if (userJson) {
        setCurrentUser(JSON.parse(userJson));
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3c6449" />
      </View>
    );
  }

  // Main Navigator Component
  function MainNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Forum" 
          options={{ headerShown: false }}
        >
          {props => (
            <ForumScreen 
              {...props} 
              currentUser={currentUser} 
              onLogout={handleLogout}
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="PostDetail" 
          component={PostDetailScreen}
          options={{ 
            title: 'Post',
            headerStyle: { backgroundColor: '#3c6449' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen 
          name="CreatePost" 
          component={CreatePostScreen}
          options={{ 
            title: 'Ask a Question',
            headerStyle: { backgroundColor: '#3c6449' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {currentUser ? <MainNavigator /> : <AuthScreen onLogin={handleLogin} />}
    </NavigationContainer>
  );
}