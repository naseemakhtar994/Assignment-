import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  }
});

export default createAppContainer(AppNavigator);