import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { OutlineButton } from './CustomComponents/ButtonLocal';

const { width, height } = Dimensions.get('window');

// const logo = require('../Assets/segmentText.png');

export const HomePage = (backToLandingPage) => (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={{marginTop: height/3}}>
            <OutlineButton title="Sign Out" buttonStyle={{ borderColor: 'rgba(255, 235, 59, 1.0)', borderRadius: 25 }} textStyle={{color: 'rgba(255, 235, 59, 1.0)'}} onPressHandler={backToLandingPage}/>
        </View>
    </View>    
)