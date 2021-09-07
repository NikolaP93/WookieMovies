import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabRoutes} from '../config/Routes';
import Search from '../../screens/Search';
import StackNavigation from '../Stack/StackNavigation';

import config from '../config/config';

const Tab = createBottomTabNavigator();

const TabNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={config.screenOptions}>
      <Tab.Screen name={TabRoutes.home} component={StackNavigation} />
      <Tab.Screen name={TabRoutes.search} component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
