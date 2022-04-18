import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import {COLORS, FONTS} from '../../../utils';
import {Gap} from '../../atoms';
import Feather from 'react-native-vector-icons/Feather';
import { Styles } from '../../../pages/styles';

const {width} = Dimensions.get('window');

const Header = ({onPress, title, onChangeText, value, onPressIcon, input}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.icon}>
        <Feather name="chevron-left" size={30} color={'white'} />
      </TouchableOpacity>
      {input == true ?
        <View style={styles.viewInput}>
          <TextInput
            placeholder={'Cari Lapangan'}
            style={styles.textinput}
            onChangeText={onChangeText}
            value={value}
          />
          {value == "" ? 
            <Feather name={"search"} size={25} color={'#C0C0C0'} style={{justifyContent: 'center', marginRight: 5}}/>
          :
            <TouchableOpacity onPress={onPressIcon}>
              <Feather name={"x"} size={25} color={'#C0C0C0'} style={{justifyContent: 'center', marginRight: 5}}/>
            </TouchableOpacity>
          }
        </View>
      :
      <Text style={styles.text}>{title}</Text>
      }
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    // borderBottomRightRadius: type === 'dark' ? 20 : 0,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: FONTS.primary[600],
    color: COLORS.white,
    // textTransform: 'capitalize',
  },
  icon: {
    marginLeft: 10,
  },
  viewInput: {
    width: width * 0.82,
    height: 40,
    marginLeft: 20,
    backgroundColor: 'white',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  textinput: {
    textAlign: 'center',
    width: width * 0.7,
    // backgroundColor: 'red'
    paddingHorizontal: 10
  },
});
