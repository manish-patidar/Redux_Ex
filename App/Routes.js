import React, {Fragment} from 'react'
import {createAppContainer, createStackNavigator, createNavigator} from 'react-navigation'
import BottomNavigator from './Screens/BottomNavigator'
import SideBar from './Screens/SideBar'
import HomeDetail from './Screens/HomeDetail'

const Roots = createStackNavigator({
    BottomNavigator: {screen: BottomNavigator},
    SideBar: {screen: SideBar},
    HomeDetail: { screen: HomeDetail }
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

const Root = createAppContainer(Roots)

const Routes = () =>{
    return(
        <Fragment>
            <Root/>
        </Fragment>
    )
}

export default Routes

