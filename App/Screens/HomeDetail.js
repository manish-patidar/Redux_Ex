import React, {Fragment, Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Header from '../Lib/Header/Header'

class HomeDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Header left= {true} right={true} leftAction={() => this.props.navigation.goBack()} title='Home Detail' rightAction={() => props.navigation.navigate('Setting')}/>
                <TouchableOpacity style={{margin: 20, padding: 10}}><Text>Home Detail</Text></TouchableOpacity>
            </View>
        )
    }
    
}

export default HomeDetail