import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationWrapper from './app/navigation/navigation-wrapper';

export default function App() {
  return (

      <NavigationWrapper>

      </NavigationWrapper>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
