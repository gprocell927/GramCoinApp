/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import PriceHistoryScreen from './PriceHistoryScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  PriceHistory: {
    screen: PriceHistoryScreen
  }
});

export default createAppContainer(AppNavigator);
