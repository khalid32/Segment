import React from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';

import { vectorIconGenerator } from '../../Utils/VectorIconGenerator';

const { width, height } = Dimensions.get("window");

export const SemifullButton = ({buttonStyle={}, textStyle={}, title="", iconBundled="", iconName="", iconColor="white", iconSize=null, iconStyle={}, onPressHandler}) => (
	<TouchableOpacity onPress={onPressHandler}>
		<View style={[styles.semifull, buttonStyle]}>
			{iconBundled && vectorIconGenerator({iconBundled, iconName, iconColor, iconSize, iconStyle})}
			<Text style={[styles.buttonText, textStyle]} >
				{title}
			</Text>				
		</View>
	</TouchableOpacity>
);

export const OutlineButton = ({buttonStyle, textStyle, onPressHandler, title}) => (
	<TouchableOpacity onPress={onPressHandler}>
		<View style={[styles.outline, buttonStyle]}>
			<Text style={[styles.buttonText, textStyle]} >
				{title}
			</Text>				
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	semifull: {
		backgroundColor: '#68C15E',		
		height: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		width: width/1.2
	},
	buttonText: {
		padding: 10, 
		color: 'white',
		fontSize: 15,
		fontFamily: 'ubuntuBold',
	},
	outline: {
		backgroundColor: 'rgba(244, 67, 54, 0.0)',		
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		width: width/1.2,
		borderWidth: 1,
		borderColor: '#ff6b6b'
	}

});
