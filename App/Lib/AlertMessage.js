import React, { Component } from 'react';
import {View, Modal,Text,TouchableOpacity,Dimensions} from 'react-native'; 
import {Colors, fontFamily, fontSize} from './Component'
import I18n from 'react-native-i18n'
import en from './en.json'
import ar from './ar.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ar
};

const { width, height } = Dimensions.get('window');

const MsgModel = ({ isMsgloading, title, message, actiontext, action, locale }) => (<Modal
    transparent={true}
    animationType={'fade'}
    visible={isMsgloading}
    onRequestClose={() => {}}>
    <View style={{flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor:'rgba(0,0,0,.9)'}}>
        <View >
            <View style={{backgroundColor: '#fff',marginLeft: 20,marginRight: 30/2,borderRadius: 30/2,marginTop: 10,padding: 20,paddingBottom: 70, width: width*0.90}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 14, color: '#000'}}>{title}</Text>
                <Text style={{fontFamily: fontFamily.RobotoMedium,fontSize: 14,lineHeight: 28,color: Colors.titleColor,textAlign: 'center',marginTop: 10}}>{I18n.t(message,{locale: locale})}</Text>
            </View>
            <View style={{zIndex: 2}}>    
                <TouchableOpacity style={{width: width*0.80,alignSelf: 'center',backgroundColor: Colors.buttonColor,borderRadius: 15,marginTop: -25,zIndex: 1,}} onPress={action}>
                    <Text style={{textAlign: 'center',padding: 15,color: '#fff',fontSize: 16,letterSpacing:1,fontFamily: fontFamily.RobotoCondensedBold}}>{actiontext}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</Modal>)

export default MsgModel;