import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileIndex from './cardcomponent';
import LandingPage from './landingPage';


export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage/>
    <ProfileIndex/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0FA58',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






