import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { OutlineButton } from './CustomComponents/ButtonLocal';


const { width, height } = Dimensions.get('window');

const logo = require('../Assets/segmentText.png');

export const LandingPage = (goToHomePage) => (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={{justifyContent: 'center'}}>
            <Image 
            resizeMode='contain'
            style={{ alignSelf: 'stretch', width: width/1.5, height: width/2, marginTop: height/8 }}
            source={logo} />
        </View>

        <View style={{marginTop: height/3}}>
            <OutlineButton title="Sign In" buttonStyle={{ borderColor: 'rgba(255, 235, 59, 1.0)', borderRadius: 25 }} textStyle={{color: 'rgba(255, 235, 59, 1.0)'}} onPressHandler={goToHomePage}/>
        </View>
    </View>
    // <ImageBackground source={ground} style={{ height, width }} resizeMode="cover" blurRadius={6}>
            
    // </ImageBackground>
    
)