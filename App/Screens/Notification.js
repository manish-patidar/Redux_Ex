import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import Header from '../Lib/Header/Header'

const Notification = (props) =>{
    return(
        <Fragment>
            <Header left= {true} right={true} leftAction={() => props.navigation.goBack()} title='Notification' rightAction={() => props.navigation.navigate('Setting')}/>
            <View style={{margin: 20}}><Text>Notification</Text></View>
        </Fragment>
    )
    
}

export default Notification