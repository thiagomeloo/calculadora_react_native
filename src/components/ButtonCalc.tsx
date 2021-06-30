import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import style from '../styles/styleButtonCalc';

function ButtonCalc(props: any) {


  return (
    <View>
      <TouchableOpacity
        style={
          [
            style.buttonNum,
            props.color ? { backgroundColor: props.color } : {},
            props.fullwidth ? { width: '95%', alignSelf: 'center' } : {}
          ]}
        onPress={props.func}>
        <Text style={style.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCalc