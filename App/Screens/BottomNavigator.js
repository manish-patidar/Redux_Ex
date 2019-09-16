import React, {Fragment} from 'react'
import {createDrawerNavigator, createBottomTabNavigator} from 'react-navigation'
import Home from '../Screens/Home'
import List from '../Screens/List'
import Setting from '../Screens/Setting'
import Notification from '../Screens/Notification'
import Icon from 'react-native-vector-icons/Ionicons';
import SideBar from '../Screens/SideBar'



const TabScreens = createBottomTabNavigator({

    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
            activeTintColor:'#09F5F5',
            tabBarIcon: ({focused, tintColor}) => (
                focused ?
                <Icon name='md-home' size={24} color='#000'/>:
                <Icon name='md-home' size={24} color='#000'/>
            ),
            
        })
    },
    List: {
        screen: List,
        navigationOptions: () => ({
            header: null,
            activeTintColor:'#09F5F5',
            tabBarIcon: ({focused, tintColor}) => (
                focused ?
                <Icon name='md-list-box' size={24} color='#000'/>:
                <Icon name='md-list-box' size={24} color='#000'/>
            ),
            
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: () => ({
            header: null,
            activeTintColor:'#09F5F5',
            tabBarIcon: ({focused, tintColor}) => (
                focused ?
                <Icon name='md-settings' size={24} color='#000'/>:
                <Icon name='md-settings' size={24} color='#000'/>
            ),
            
        })
    },
    Notification: {
        screen: Notification,
        navigationOptions: () => ({
            header: null,
            activeTintColor:'#09F5F5',
            tabBarIcon: ({focused, tintColor}) => (
                focused ?
                <Icon name='md-notifications-outline' size={24} color='#000'/>:
                <Icon name='md-notifications-outline' size={24} color='#000'/>
            ),
            
        })
    },
});

const AppDrawerNavigation = createDrawerNavigator(
    {
        ' ': {screen: TabScreens},
        
        
    },{
        contentComponent: props => <SideBar {...props} />
    })

export default AppDrawerNavigation