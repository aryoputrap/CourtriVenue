import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const ButtonBorder = ({onPress,title, borderColor, width, color}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={{borderWidth:2, borderColor, width, padding: 10, borderRadius: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color}}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonBorder;
