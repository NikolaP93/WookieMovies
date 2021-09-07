import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/Tab/TabNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProvider from './src/modules/context/AppContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContextProvider>
          <TabNavigation />
        </ContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
