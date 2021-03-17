import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Preload from './views/Preload'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
// import User from './views/User'

// import TabStack from './TabStack'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name='Preload' component={Preload}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        {/* <Stack.Screen name='User' component={User}/> */}
        {/* <Stack.Screen name='MainTab' component={TabStack}/> */}
    </Stack.Navigator>
  );
}

export default MainStack;
