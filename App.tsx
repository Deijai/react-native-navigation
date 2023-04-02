//import liraries
import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { DrawerMenuLateral } from './src/navigatior/DrawerMenuLateral';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerMenuLateral />
    </NavigationContainer>
  );
};
//make this component available to the app
export default App;
