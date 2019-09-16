import React, {Fragment, Component} from 'react'
import {View, Text, Dimensions, Platform, PermissionsAndroid} from 'react-native'
import Header from '../Lib/Header/Header'
import MapView, {Marker, PROVIDER_GOOGLE, AnimatedRegion, Animated,} from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service'
import Icons from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window')

class Setting extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude: 22.7196,
            longitude: 75.8577,
            region: {
                latitude: 22.7196,
                longitude: 75.8577,
                longitudeDelta:0.0922,
                latitudeDelta:0.0922,
            },
        }
    }

    hasLocationPermission = async() => {
        // if (Platform.OS === 'ios' ||
        //     (Platform.OS === 'android' && Platform.Version < 23)) {
        //     return true;
        // }
        const hasPermission = PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (hasPermission) return true;
        const status = PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
        if (status === PermissionsAndroid.RESULTS.DENIED) {
           console.log('Location permission denied by user.');
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            console.log('Location permission revoked by user.');
        }
        return false;
    }

    
    componentWillMount = async() => { 
        const hasLocationPermission = await this.hasLocationPermission();
        console.log('aaaaaaaaaaaaaaaaaaaaa', hasLocationPermission)
        if (!hasLocationPermission) return;
            Geolocation.getCurrentPosition(
            position => {
                console.log('ssssssssssssssssss', position)
            
                this.setState({ 
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        longitudeDelta:LONGITUDE_DELTA,
                        latitudeDelta:LATITUDE_DELTA,
                    },
                    btn_active: true
                })

        },
        error => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, distanceFilter: 10 }
        );      
    }



    render(){
        return(
            <View>
                <Header left= {true} right={true} leftAction={() => this.props.navigation.goBack()} title='Map' rightAction={() => this.props.navigation.navigate('Setting')}/>
                <MapView
                        style={{height: height, width, zIndex: 1}}
                        showsUserLocation={true}
                        showsMyLocationButton={false}
                        //onRegionChange={(region) => console.log('kk', region)}
                        minZoomLevel={2}
                        rotateEnabled={false}
                        pitchEnabled={false}
                        region={this.state.region}
                        moveOnMarkerPress={false}
                        onRegionChangeComplete ={  region => this.setState({latitude:region.latitude,longitude:region.longitude,region:region})}
                    >
                        <Marker
                            coordinate={{ 
                                latitude: this.state.region.latitude,
                                longitude: this.state.region.longitude
                            }}
                        >
                            <Icons style={{backgroundColor:'transparent'}} name="location-pin" size={40}/>
                        </Marker>   
                    </MapView>
            </View>
        )
    }
}

export default Setting