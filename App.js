import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react"
import WelcomePage from './app/pages/welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
});
