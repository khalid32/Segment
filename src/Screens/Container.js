import React, { Component, Fragment } from 'react';
import {Platform, ImageBackground, Alert, AsyncStorage, ActivityIndicator, StyleSheet, Dimensions, Text, View} from 'react-native';
import { LandingPage } from './LandingPage';
import { HomePage } from './HomePage'
import { SplashScreen } from './SplashScreen';
import IntroScreen from './IntroScreen';
import { LinearGradientGenerator } from '../Utils/LinearGradientGenerator';
import { CheckIfFirstLaunch } from '../Utils/CheckIfFirstLaunch';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class Container extends Component {
        constructor(){
            super();
            this.state = {
                isFirstLaunch: false,
                hasCheckedAsyncStorage: false,

                splashScreenLoading: true,
                landingPanel: true,
                homePanel: false,
                registerPanel: false
            }
        }

        componentDidMount = async () => {
            setTimeout(() => {
                this.setState({ splashScreenLoading: false });
            }, 3000);

            const isFirstLaunch = await CheckIfFirstLaunch();
            this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
        }

        goToHomePage = () => {
            this.setState({ 
                landingPanel: false,
                homePanel: true,
                registerPanel: false,
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
            const { isFirstLaunch, hasCheckedAsyncStorage, splashScreenLoading, landingPanel, homePanel, registerPanel } = this.state;
            const gradient = LinearGradientGenerator({landingPanel, homePanel, registerPanel});
            
            if(!hasCheckedAsyncStorage){ return null; }
            
            return(
                <Fragment>
                    {/* <IntroScreen /> */}

                    { splashScreenLoading == true && isFirstLaunch == false && SplashScreen() }
                    { splashScreenLoading == false && isFirstLaunch == true && 
                        <IntroScreen 
                            skipIntro={() => this.setState({ isFirstLaunch: false })}
                    /> }
                    {
                        splashScreenLoading == false && isFirstLaunch == false && 
                    <LinearGradient colors={[...gradient]} style={{ flex: 1 }}>
                        {landingPanel == true && homePanel == false && registerPanel == false && LandingPage(this.goToHomePage)}
                        {landingPanel == false && homePanel == true && registerPanel == false && HomePage(this.backToLandingPage)}
                    </LinearGradient>
                    }
                </Fragment>
                
            );
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