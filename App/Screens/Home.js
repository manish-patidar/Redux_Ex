import React, {Fragment} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Header from '../Lib/Header/Header'
console.disableYellowBox = true
const Home = (props) =>{
    return(
        <Fragment>
            <Header sidebar= {true} right={true} leftAction={() => props.navigation.openDrawer()} title='Home' rightAction={() => props.navigation.navigate('Setting')}/>
                <TouchableOpacity style={{margin: 20, padding: 10}} onPress={() => props.navigation.navigate('HomeDetail')}>
                    <Text>Home (Click here)</Text>
                </TouchableOpacity>
        </Fragment>
    )
}

export default Home