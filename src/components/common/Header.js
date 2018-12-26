
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

const Header = (props) => {
  const {container, textStyle} = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    height: 50,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
