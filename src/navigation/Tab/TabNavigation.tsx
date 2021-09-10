import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabRoutes} from '../config/Routes';
import Search from '../../screens/Search';
import StackNavigation from '../Stack/StackNavigation';

import config from '../config/config';
import Icon, {IconProps} from '../../components/Icon/Icon';
import {NavigationState} from '@react-navigation/routers';
import {NavigationProp} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const homeIconProps: IconProps = {
  color: 'black',
  name: 'home',
  size: 28,
  type: 'font-awesome',
  testId: 'Home',
};

const searchIconProps: IconProps = {
  color: 'black',
  name: 'search',
  size: 28,
  type: 'font-awesome',
  testId: 'Search',
};

type Navigation = NavigationProp<NavigationState>;

export interface NavigationParams {
  navigate: (
    route: string,
    params?: {
      movieTitle: string;
    },
  ) => null;
}

const TabNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={config.screenOptions}>
      <Tab.Screen
        name={TabRoutes.home}
        component={StackNavigation}
        options={{
          tabBarIcon: () => <Icon {...homeIconProps} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.search}
        component={Search}
        options={{
          tabBarIcon: () => <Icon {...searchIconProps} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
