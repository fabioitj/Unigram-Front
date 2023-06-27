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
<<<<<<< HEAD
import { AuthProvider } from './app/contexts/auth';
import ProtectedPage from './app/pages/ProtectedPage';
import Post from './app/pages/post/post';
import MessageConversation from './app/pages/messages/message_conversation';
=======
import AuthProvider from "./app/contexts/auth";
>>>>>>> 26530cd9c9fa16844e613537910b419cdcf4ce1d

const Stack = createNativeStackNavigator();

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={SlideInHome} />
          {/* <ProtectedPage> */}
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="MessageConversation" component={MessageConversation} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="NewPost" component={NewPost} />
          {/* </ProtectedPage> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
=======
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
>>>>>>> 26530cd9c9fa16844e613537910b419cdcf4ce1d
  );
}

export default App;