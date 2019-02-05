import React, { Component } from 'react';
import { ImageBackground, Dimensions } from 'react-native';
import Container from './src/Components/Container';

const { width, height } = Dimensions.get('window');
const backdrop = require('./src/Assets/greenTexture1.jpg');

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={backdrop} style={{ height, width }} resizeMode="cover" blurRadius={1}>
        <Container />
      </ImageBackground>
    );
  }
}


