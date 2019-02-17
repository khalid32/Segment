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

        this.state = {
            endAppear: false,
            xOffset: 0,
        }

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

    whenDragEnds = (e) => {
        // this.setState({ endAppear: true });
        this.setState({xOffset: e.nativeEvent.contentOffset.x })
    }

    render(){
        const { endAppear, xOffset } = this.state;
        console.log("xOffset -> ", xOffset);
        return(
            <View style={[{flex: 1}, styles.adjustCenter]}>
                <ScrollView
                ref={(ref) => { this._scrollView = ref }}
                scrollEnabled={true}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => this.whenDragEnds(e)}
                onContentSizeChange={(conHeight, conWidth) => { this.scrollHeight = conHeight }}
                >
                    <ImageBackground source={multiPic.pic1} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic2} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic3} style={{width, height}}></ImageBackground>
                    <ImageBackground source={multiPic.pic4} style={{width, height}}></ImageBackground>
                </ScrollView>
                { endAppear == true && 
                    
                    <View style={ styles.skipButtonPanel }>
                        <TouchableOpacity style={[styles.introSkipButton, styles.adjustCenter]} onPress={this.touchToChange}>
                            <VectorIconGenerator
                            iconBundled="Ionicons"
                            iconName="ios-arrow-forward"
                            iconSize={23}
                            />
                        </TouchableOpacity>
                    </View>
                }
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
    },
    skipButtonPanel: {
        height: width/5, width: width/5, position: 'absolute', right: 0, bottom: 0
    },
    introSkipButton: {
        height: 50, width: 50, borderRadius: 50, backgroundColor: 'rgba(99, 110, 114, 0.5)'
    }
});