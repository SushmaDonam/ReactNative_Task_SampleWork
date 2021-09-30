
import React from 'react';

import {
  createAppContainer
} from 'react-navigation';
import {
  createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import {
  createStackNavigator
} from 'react-navigation-stack';


import Screen1 from './Pages/Screen1';
import Screen2 from './Pages/Screen2';
import Screen3 from './Pages/Screen3';
import SearchScreen from './Pages/SearchScreen';


const TabScreen = createMaterialTopTabNavigator(
  {
    All: { screen: Screen1 },
    Article: { screen: Screen2 },
    Video: { screen: Screen3 },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#666666',
      style: {
        backgroundColor: '#1c1e1d',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2,
      },
    },
  }
);

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'React Native Tab example',
      header: <SearchScreen  />
    },
  },
});
export default createAppContainer(App);