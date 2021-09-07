import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
