import React, { Component } from 'react';
import {Platform, TouchableOpacity, ImageBackground, ScrollView, Alert, StyleSheet, Dimensions, Text, View} from 'react-native';
import { VectorIconGenerator } from '../Utils/VectorIconGenerator';
import { BubbleView } from '../Components/CustomComponents/BubbleView';

const { width, height } = Dimensions.get('window');

const multiPic = {
    pic1: require('../Assets/Intro_Screen/monkey-653705_1280.jpg'),
    pic2: require('../Assets/Intro_Screen/alone.jpg'),
    pic3: require('../Assets/Intro_Screen/Nature5.jpg'),
    pic4: require('../Assets/Intro_Screen/Red_sunset6789_rectangle.jpg'),
    endAppear: false,
}

export default class IntroScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            // endAppear: false,
            xOffset: 0,
        }

        this._scrollView = null;
        this.counter = 0;
    }

    componentDidUpdate = () => {
        const { xOffset } = this.state;
        if(xOffset == width * 3){
            multiPic.endAppear = true;
        }
    }

    touchToChange = () => {

    }

    whenDragEnds = (e) => {
        this.setState({xOffset: e.nativeEvent.contentOffset.x });
    }

    render(){
        const { xOffset } = this.state;

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
                <View style={ styles.adjustBubbles }>
                    <BubbleView customStyle={{backgroundColor: xOffset == 0 ? 'rgba(223, 230, 233,1.0)' : 'rgba(223, 230, 233, 0.5)'}}/>
                    <BubbleView customStyle={{backgroundColor: xOffset == width ? 'rgba(223, 230, 233,1.0)' : 'rgba(223, 230, 233, 0.5)'}} />
                    <BubbleView customStyle={{backgroundColor: xOffset == width * 2 ? 'rgba(223, 230, 233,1.0)' : 'rgba(223, 230, 233, 0.5)'}} />
                    <BubbleView customStyle={{backgroundColor: xOffset == width * 3 ? 'rgba(223, 230, 233,1.0)' : 'rgba(223, 230, 233, 0.5)'}} />
                </View>
                { multiPic.endAppear == true && 
                    
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
    },
    adjustBubbles: { flexDirection: 'row', height: 30, width: width/3, position: 'absolute', bottom: width/5, left: width/3 }
});