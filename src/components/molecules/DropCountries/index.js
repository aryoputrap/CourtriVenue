/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions, TextInput} from 'react-native';
import DropDownPicker from './DropDownPicker';

const {width, height} = Dimensions.get('window');
const DropCountries = ({
  onChangeItem,
  style,
  onChangeText,
  defaultValue,
  value,
  placeholder,
}) => {
  // const [count] = useState(60);
  return (
    <View style={{flexDirection: 'row'}}>
      <DropDownPicker
        items={[
          {
            id: 1,
            label: '(+60)',
            value: 60,
            icon: () => <Text>🇲🇾</Text>,
          },
          {
            id: 2,
            label: '(+62)',
            value: 62,
            icon: () => <Text>🇮🇩</Text>,
          },
          {
            id: 3,
            label: '(+67)',
            value: 673,
            icon: () => <Text>🇧🇳</Text>,
          },
          {
            id: 4,
            label: '(+65)',
            value: 65,
            icon: () => <Text>🇸🇬</Text>,
          },
        ]}
        defaultValue={defaultValue}
        containerStyle={{height: height * 0.05, width: width * 0.25}}
        style={{backgroundColor: '#fafafa', borderColor: '#bdc3c7'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: 'white'}}
        onChangeItem={onChangeItem}
      />
      <TextInput
        keyboardType={'phone-pad'}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        onChangeText={onChangeText}
        value={value}
        style={style}
      />
    </View>
  );
};

export default DropCountries;
