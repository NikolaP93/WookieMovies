import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/Tab/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProvider from './src/modules/context/AppContext';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContextProvider>
          <FlashMessage position="top" />
          <TabNavigation />
        </ContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
