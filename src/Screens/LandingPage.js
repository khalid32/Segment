import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { OutlineButton } from '../Components/CustomComponents/ButtonLocal';

const { width, height } = Dimensions.get('window');

const logo = require('../Assets/segmentText.png');

export const LandingPage = (goToHomePage) => (
    <View style={[styles.container, styles.adjustTop]}>
        <View style={{justifyContent: 'center'}}>
            <Image 
            resizeMode='contain'
            style={styles.logoStyle}
            source={logo} />
        </View>

        <View style={{marginTop: height/3}}>
            <OutlineButton title="Get Started" buttonStyle={styles.outlineButtonStyle} textStyle={{color: 'rgba(255, 235, 59, 1.0)'}} onPressHandler={goToHomePage}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1},
    adjustTop: { justifyContent: 'flex-start', alignItems: 'center' },
    logoStyle: { alignSelf: 'stretch', width: width/1.5, height: width/2, marginTop: height/8 },
    outlineButtonStyle: { borderColor: 'rgba(255, 235, 59, 1.0)', borderRadius: 25 },
});