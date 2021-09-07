import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import {HomeRoutes} from '../config/Routes';
import config from '../config/config';

const Stack = createStackNavigator();

const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={config.screenOptions}
      initialRouteName={HomeRoutes.main}>
      <Stack.Screen name={HomeRoutes.main} component={Home} />
      <Stack.Screen name={HomeRoutes.details} component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
