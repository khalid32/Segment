import React, { Component } from 'react';
import {Platform, TouchableOpacity, ImageBackground, ScrollView, Alert, StyleSheet, Dimensions, Text, View} from 'react-native';
import { VectorIconGenerator } from '../Utils/VectorIconGenerator';

const { width, height } = Dimensions.get('window');

const multiPic = {
    pic1: require('../Assets/Intro_Screen/monkey-653705_1280.jpg'),
    pic2: require('../Assets/Intro_Screen/alone.jpg'),
    pic3: require('../Assets/Intro_Screen/Nature5.jpg'),
    pic4: require('../Assets/Intro_Screen/Red_sunset6789_rectangle.jpg'),
}

export default class IntroScreen extends Component{
    constructor(props){
        super(props);

        this._scrollView = null;
        this.counter = 0;
    }

    touchToChange = () => {
        switch(this.counter){
            case 0:
                this._scrollView.scrollTo({x: width});
                this.counter++;
                break;
            case 1:
                this._scrollView.scrollTo({x: width * 2});
                this.counter++;
                break;
            case 2:
                this._scrollView.scrollTo({x: width * 3});
                this.counter++;
                break;
            case 3:
                this._scrollView.scrollTo({x: 0});
                this.counter = 0;
                break;

            default:
        }
    }

    render(){
        return(
            <View style={[{flex: 1}, styles.adjustCenter]}>
                <ScrollView
                ref={(ref) => { this._scrollView = ref }}
                scrollEnabled={true}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(conHeight, conWidth) => { this.scrollHeight = conHeight }}
                >
                    <ImageBackground source={multiPic.pic1} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic2} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic3} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic4} style={{width, height}}></ImageBackground>
                </ScrollView>
                <View style={styles.navigateMethod}>
                    <View style={{flex: 0.2}}></View>
                    <View style={{flex: 0.8}}></View>                    
                    <TouchableOpacity style={[{flex: 0.2}, styles.adjustCenter]} onPress={this.touchToChange}>
                        <VectorIconGenerator 
                        iconBundled="Ionicons"
                        iconName="ios-arrow-forward"
                        iconSize={23}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    adjustCenter: {
        justifyContent: 'center', alignItems: 'center',
    },
    navigateMethod: {
        flexDirection: 'row',
        height: width/5,
        position: 'absolute',
        left: 0, bottom: 0, right: 0,
        backgroundColor: 'rgba(99, 110, 114, 0.5)', 
    }
});