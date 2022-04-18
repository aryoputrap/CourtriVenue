/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import DropDown from './Drop';

// const {width, height} = Dimensions.get('window');
const DropdownData = ({
  onChangeItem,
  items,
  searchablePlaceholder,
  containerStyle,
  placeholder,
  colortextplace,
}) => {
  // const [count] = useState(60);
  return (
    <View style={{flexDirection: 'row'}}>
      <DropDown
        // items={item}
        items={items}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        placeholderTextColor={colortextplace}
        containerStyle={containerStyle}
        style={{backgroundColor: '#fafafa', borderColor: '#bdc3c7'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: 'white'}}
        onChangeItem={onChangeItem}
        searchable={true}
        searchablePlaceholder={searchablePlaceholder}
        searchableError={() => <Text>Sorry, it could not be found!</Text>}
      />
    </View>
  );
};

export default DropdownData;
