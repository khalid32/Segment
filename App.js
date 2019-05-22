import React, { Component, Fragment } from 'react';
import { ImageBackground, Dimensions, StatusBar } from 'react-native';
import Container from './src/Screens/Container';

const { width, height } = Dimensions.get('window');
const backdrop = require('./src/Assets/architecture-2893844_1920.jpg');

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={backdrop} style={{ height, width }} resizeMode="stretch" blurRadius={8}>
        <StatusBar hidden={true} backgroundColor="#636e72"/>
        <Container />
      </ImageBackground>
    );
  }
}