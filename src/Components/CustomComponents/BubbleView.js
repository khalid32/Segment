import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window");

export const BubbleView = ({ customStyle={} }) => (
    <View style={[{flex: 0.25}, styles.adjustCenter]}>
        <View style={[styles.bubbleIndicator, customStyle ]} />
    </View>
);

const styles = StyleSheet.create({
    adjustCenter: { justifyContent: 'center', alignItems: 'center' },
    bubbleIndicator: { height: 10, width: 10, borderRadius: 50 }
})