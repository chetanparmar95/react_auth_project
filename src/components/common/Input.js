import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {containerStyle, textStyle, textInputStyle} = styles;
  return (
    <View style = {containerStyle}>
      <Text style = {textStyle}>{label}</Text>
      <TextInput
        secureTextEntry = {secureTextEntry}
        placeholder = {placeholder}
        autoCorrect = {false}
        value = {value}
        onChangeText = {onChangeText}
        style = {textInputStyle}
      />
    </View>
  );
};

const styles = {
  textStyle:{
    flex: 1,
    fontSize: 18,
    paddingLeft: 5,
  },
  textInputStyle:{
    flex: 3,
    fontSize: 18,
    color: '#000',
    paddingLeft: 5,
    paddingRight:5,
    lineHeight: 23
  },
  containerStyle:{
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center'
  }
}

export { Input }
