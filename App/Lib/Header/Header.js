import React, {Fragment} from 'react'
import {StyleSheet,View, Text, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window')

const Header = (props) =>{
    return(
        <View style={props.animation ? styles.animation_container : styles.container}>
            {console.log('leftAction',props)}
            <View style={{flex: 1, flexDirection: 'row'}}>
                {
                    props.left &&
                    <TouchableOpacity hitSlop={{top:20, bottom: 20, left:20, right:20}} onPress={props.leftAction}>
                        <Icon name='md-arrow-back' size={24} color='#000'/>
                    </TouchableOpacity>
                }
                {
                    props.sidebar &&
                    <TouchableOpacity hitSlop={{top:20, bottom: 20, left:20, right:20}} onPress={props.leftAction}>
                        <Icon name='md-menu' size={20} color='#000'/>
                    </TouchableOpacity>
                }
                <Text style={{paddingLeft: 25, fontSize: 18}}>{props.title ? props.title : ''}</Text>

                {
                    props.right &&
                    <TouchableOpacity hitSlop={{top:20, bottom: 20, left:20, right:20}} style={{flex: 1}} onPress={props.rightAction}>
                        <Icon name='md-settings' size={24} color='#000' style={{alignSelf: 'flex-end'}}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        elevation: 4,
        borderBottomColor: 'gray',
        backgroundColor: '#fff',
        shadowOpacity: 0.8,
        shadowColor: '#000',
        alignSelf: 'center'
    },
    animation_container:{
        width,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignSelf: 'center'
    }
})

export default Header