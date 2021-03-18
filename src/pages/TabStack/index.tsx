import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabComponent from '../../components/CustomTabBar'

const Tab = createBottomTabNavigator()

import Home from './views/Home'
import Search from './views/Search'
import Appointments from './views/Appointments'
import Favorites from './views/Favorites'
import Profile from './views/Profile'

const  TabStack = () => (
    <Tab.Navigator tabBar={props=> <TabComponent {...props} />}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Appointments' component={Appointments}/>
        <Tab.Screen name='Favorites' component={Favorites}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
)

export default  TabStack;
