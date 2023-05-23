import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import SlideInHome from './app/components/slide-in-home';
import Feed from './app/pages/feed/index';
import Messages from './app/pages/messages';
import Notifications from './app/pages/notifications';
import Search from './app/pages/search';
import Profile from './app/pages/profile/my-profile';
import EditProfile from './app/pages/profile/edit';
import NewPost from './app/pages/new-post';
import AuthProvider from "./app/contexts/auth";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={SlideInHome} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;