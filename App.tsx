import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/Tab/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
