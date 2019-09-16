import React, {Fragment, Component} from 'react'
import {View, Text} from 'react-native'
import Header from '../Lib/Header/Header'


class Sidebar extends Component{
    constructor(props){
        super(props);
        this. state = {

        }
    }

    render(){
        return(
            <Fragment>
               
                <View style={{margin: 20}}><Text>Side bar</Text></View>
            </Fragment>
        )
    }
}

export default Sidebar