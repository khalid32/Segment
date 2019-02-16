import React, { Component, Fragment } from 'react';
import { ImageBackground, Dimensions } from 'react-native';
import Container from './src/Components/Container';

const { width, height } = Dimensions.get('window');
const backdrop = require('./src/Assets/Awoooooooooo.jpg');

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={backdrop} style={{ height, width }} resizeMode="stretch" blurRadius={5}>
        <Container />
      </ImageBackground>
    );
  }
}


