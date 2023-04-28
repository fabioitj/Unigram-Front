import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import { IoNotifications } from 'react-icons/io5';
import SlideInHome from './app/components/slide-in-home';
import Feed from './app/pages/feed/index';
import Messages from './app/pages/messages';
import Notifications from './app/pages/notifications';
import Profile from './app/pages/profile';
import Search from './app/pages/search';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
        <Stack.Screen
          name="Login"
          component={SlideInHome} 
        />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;