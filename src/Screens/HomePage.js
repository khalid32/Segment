import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { OutlineButton } from '../Components/CustomComponents/ButtonLocal';

const { width, height } = Dimensions.get('window');

// const logo = require('../Assets/segmentText.png');

export const HomePage = (backToLandingPage) => (
    <View style={[styles.container, styles.adjustTop]}>
        <View style={{marginTop: height/3}}>
            <OutlineButton title="Sign Out" buttonStyle={styles.outlineButtonStyle} textStyle={{color: 'rgba(255, 235, 59, 1.0)'}} onPressHandler={backToLandingPage}/>
        </View>
    </View>    
);

const styles = StyleSheet.create({
    container: { flex: 1},
    adjustTop: { justifyContent: 'flex-start', alignItems: 'center' },
    outlineButtonStyle: { borderColor: 'rgba(255, 235, 59, 1.0)', borderRadius: 25 },
});