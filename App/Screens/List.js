import React, {Fragment, Component} from 'react'
import {View, Text, FlatList, Animated, Image, Dimensions, ScrollView, StatusBar, RefreshControl} from 'react-native'
import Header from '../Lib/Header/Header'
import { connect } from 'react-redux';
import {listData} from '../Action/Action'
const {width, height} = Dimensions.get('window')

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/fishing-pier-at-sunrise-in-ocean-city-new-jersey-photographic-arts-and-design-studio.jpg",
            colorAnimation: new Animated.Value(0),
            refreshing: false
        }
    }

    componentWillMount(){
        this.fetchData()
    }

    fetchData(){
        this.setState({refreshing: true})
        this.props.listData()
    }


    componentWillReceiveProps(){
        console.log('componentWillReceiveProps props data', this.props)
        this.setState({refreshing: false})
    }

    render(){
        console.log('render props data', this.props)
        const list = this.props.list_data.data
        let backgroundColor = this.state.colorAnimation.interpolate({
            inputRange: [0, 150, 300],
            outputRange: ['#FFFFFF00', '#fff', '#fff'],
            extrapolate: 'clamp',
        })
        return(
            <View style={{flex: 1}}>
                <ScrollView 
                 scrollEventThrottle={16}
                    style={{width:width}}
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={() => this.fetchData()}
                        />
                      }
                    onScroll={(event) => {
                        this.setState({ colorAnimation: new Animated.Value(event.nativeEvent.contentOffset.y) })
                    }}>
                        
                  
                    <Image source={{uri: this.state.image}} style={{width, height: 200}}/>
                    <FlatList
                        data={list}
                        scrollEnabled
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return(
                                <View style={{ marginTop: 50,marginLeft: 20, marginRight: 20, alignSelf: 'center', width: width*0.50-40}}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.phone}</Text>
                                    <Text>{item.email}</Text>
                                </View>
                            );
                        }}
                    />
                </ScrollView>
                <Animated.View style={[{ width:width,height:60, position: 'absolute', top: 0, left: 0, flexDirection: 'row',justifyContent: 'center',}, { backgroundColor }]}>
                        <Header left= {true} right={true} leftAction={() => this.props.navigation.goBack()} title='List' animation={true} rightAction={() => this.props.navigation.navigate('Setting')}/>
                </Animated.View>
                
            </View>
        )
    }
}

const mapStateToProps = (state) =>({
    list_data: state.ListReducer.required_data,
})

const mapDispatchToProps = (dispatch) =>({
    listData: () => dispatch(listData())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);