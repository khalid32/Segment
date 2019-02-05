import React from 'react';
import { StyleSheet,  Dimensions, TextInput } from 'react-native';
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get("window");

const InputLocal = ({customStyle, placeholder, secureTextEntry=false, onChange, value, textColor='rgba(255,255,255,0.2)'}) => {
		return (<TextInput
			style={[styles.input,customStyle]}
			placeholderTextColor = {textColor}
			placeholder= {placeholder}
			returnKeyType='next'
			autoCorrect={false}
			secureTextEntry={secureTextEntry}
			autoCapitalize={'none'}
      underlineColorAndroid='rgba(0,0,0,0)'
			onChangeText={(text) => onChange(text)}
			value={value}
		/>)
}

InputLocal.propTypes = {
  customStyle: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  placeholderTextColor: PropTypes.string
  //onChange: PropTypes.func.isRequired
}


const styles = StyleSheet.create({
	input: {
		height: 40,
		width: width/1.2,
		borderRadius: 5,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 15,
		color: 'white',
		paddingHorizontal: 10,
		fontFamily: 'ubuntuLight',
	}
});

export default InputLocal;