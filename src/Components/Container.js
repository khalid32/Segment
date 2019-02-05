import React, { Component } from 'react';
import {Platform, ImageBackground, StyleSheet, Dimensions, Text, View} from 'react-native';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage'
import { LinearGradientGenerator } from '../Utils/LinearGradientGenerator';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Container extends Component {
        constructor(){
            super();
            this.state = {
                landingPanel: true,
                homePanel: false,
                registerPanel: false
            }
        }

        goToHomePage = () => {
            this.setState({ 
                landingPanel: false,
                homePanel: true,
                registerPanel: false
            });
        }

        backToLandingPage = () => {
            this.setState({ 
                landingPanel: true,
                homePanel: false,
                registerPanel: false
            });
        }
    
        render() {
            const { landingPanel, homePanel, registerPanel } = this.state;
            const gradient = LinearGradientGenerator(landingPanel, homePanel, registerPanel);
            console.log('gradient -> ', gradient);
            return(
                <LinearGradient colors={[gradient.IndexZero, gradient.IndexOne, gradient.IndexTwo, gradient.IndexThree, gradient.IndexFour]} style={{ flex: 1 }}>
                    {landingPanel == true && homePanel == false && registerPanel == false && LandingPage(this.goToHomePage)}
                    {landingPanel == false && homePanel == true && registerPanel == false && HomePage(this.backToLandingPage)}
                </LinearGradient>
            );
            // if(landingPanel == true && loginPanel == false && registerPanel == false){
            //     return <LandingPage />;
            // }
            // else{
            //     return (
            //         <View style={styles.container}>
            //         <Text style={styles.welcome}>Welcome to React Native!</Text>
            //         <Text style={styles.instructions}>To get started, edit App.js</Text>
            //         <Text style={styles.instructions}>{instructions}</Text>
            //         </View>
            //     );
            // }
        
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});