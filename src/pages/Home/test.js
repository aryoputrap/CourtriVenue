/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
} from 'react-native';
import {Colors} from './BoCourt/Color';
import {connect} from 'react-redux';
import {addOrder} from '../../redux/actions/orderAction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../utils';

const {width, height} = Dimensions.get('window');

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  onswitch = ({item, index}) => {
    switch (item.value) {
      case 'booked':
        return (
          <View style={{margin: 2}}>
            <View
              style={[
                styles.childRow,
                styles.button,
                styles.InActive,
              ]}>
              <Text
                style={[
                  styles.font,
                  styles.itemInActive,
                  {color: 'white'},
                ]}>
                {item.key}
              </Text>
            </View>
            <View style={styles.childHr} />
          </View>
        );
      case 'block':
        return (
          <View style={{margin: 2}}>
            <View
              style={[
                styles.childRow,
                styles.button,
                styles.btnInActive,
                {margin: 5, backgroundColor: COLORS.greyLight, borderColor: COLORS.greyLight},
              ]}>
              <Text style={[styles.font, {textAlign: 'center', color: 'white'}]}>
                {item.key}
              </Text>
            </View>
          </View>
        );
      case true:
        return (
          <View style={{margin: 2}}>
            <TouchableOpacity
              onPress={() => this.inClick(index)}
              // onPress={this.props.inClick(index)}
              style={[
                styles.childRow,
                styles.button,
                styles.OnActive,
                // {width: '50%'},
                {margin: 5},
              ]}>
              <Text
                style={[
                  styles.font,
                  styles.itemInActive,
                  {color: 'white', textAlign: 'center'},
                ]}>
                {item.key}
              </Text>
            </TouchableOpacity>
          </View>
        );
      case false:
        return (
          <View style={{margin: 2, justifyContent: 'center'}}>
            <TouchableOpacity
              style={[
                styles.childRow,
                styles.button,
                item.value ? styles.btnActive : styles.btnInActive,
                {margin: 5},
              ]}
              // onPress={() => this.onClick(index)}>
              onPress={() => this.onClick(index)}>
              <Text
                style={[
                  styles.font,
                  styles.itemInActive,
                  {
                    color: item.value === false ? 'black' : 'white',
                    textAlign: 'center',
                    alignSelf: 'center',
                  },
                ]}>
                {item.key}
              </Text>
            </TouchableOpacity>
          </View>
        );
      case "avail":
        return (
          <View style={{margin: 2, justifyContent: 'center'}}>
            <TouchableOpacity
              style={[
                styles.childRow,
                styles.button,
                styles.btnInActive,
                {margin: 5},
              ]}
              onPress={() => this.onClick(index)}>
              <Text
                style={[
                  styles.font,
                  styles.itemInActive,
                  {
                    color: 'black',
                    textAlign: 'center',
                    alignSelf: 'center',
                  },
                ]}>
                {item.key}
              </Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={{alignItems: 'center', paddingVertical: 5}}>
        <TouchableOpacity
          style={[styles.row, {backgroundColor: '#88CD0C', borderRadius: 7, width: width * 0.94}]}
          onPress={() => this.toggleExpand()}>
          <View>
            <Text style={[styles.title]}>{this.props.title}</Text>
            <Text style={{color: 'white'}}>{this.props.range}</Text>
          </View>
          <Icon
            name={
              this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
            }
            size={30}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        <View style={{flex: 1, flexWrap: 'wrap'}}>
          {this.state.expanded && (
            <View>
              <FlatList
                style={{
                  backgroundColor: COLORS.white,
                  alignSelf: 'center',
                  alignContent: 'center',
                  marginTop: 5,
                  borderRadius: 7
                }}
                data={this.state.data}
                numColumns={4}
                keyExtractor={item => item.key}
                renderItem={this.onswitch}
              />
            </View>
          )}
        </View>
      </View>
    );
  }

  inClick = index => {
    const boArr = this.state.data;
    boArr[index].value = false;

    const objTotal = boArr.filter(obj => {
      return obj.value == true;
    });
    // console.log('ini saat in click', objTotal.length);
    if(objTotal.length == 0){
      const manBo = boArr.map(obj => ({ 
        "key": obj.key,
        "value": 
          obj.value === 'booked' ? 'booked' : 
          obj.value === 'avail' ? false:
          obj.value === false ? false:
          obj.value === 'block' ? false: null
      })); 
      // console.log(manBo);
      this.setState({data: manBo});
    } else {
      // boArr[index].value = false;
      let dataAff = boArr[index + 1].value
      let dataBef = boArr[index - 1].value

      if(dataAff & dataBef == true) {
        const manTotal = boArr.map(obj => ({ 
          "key": obj.key,
          "value": 
            obj.value === 'booked' ? 'booked' : 
            obj.value === 'avail' ? false:
            obj.value === true ? false:
            obj.value === false ? false:
            obj.value === 'block' ? false: null
        })); 

        this.setState({data: manTotal});
      }
      else {
        if(dataAff == 'avail') {
          boArr[index + 1].value = 'block'
        } else if(dataAff == false){
          boArr[index + 1].value = 'block'
        } else if(dataAff == true){
          boArr[index + 1].value = true
        } else if(dataAff == 'booked'){
          dataAff
        } else {
          boArr[index + 1].value = 'avail';
        }

        if(dataBef == 'avail') {
          boArr[index - 1].value = 'block'
        } else if(dataBef == false){
          boArr[index - 1].value = 'block'
        } else if(dataBef == true){
          boArr[index - 1].value = true
        } else if (dataBef == 'booked'){
          dataBef
        } else{
          boArr[index - 1].value = 'avail';
        }

        const objTotal = boArr.filter(obj => {
          return obj.value == true;
        });
        const manTotal = boArr.map(obj => ({ 
          "key": obj.key,
          "value": 
            obj.value === 'booked' ? 'booked' : 
            obj.value === 'avail' ? false:
            obj.value === false ? false:
            obj.value === 'block' ? false: null
        })); 
        
        // console.log(['MANIPUL'],boArr);
        this.setState({data: objTotal.length == 0? manTotal: boArr});

        let item = {
          title: this.props.title,
          order: objTotal.length == 0? manTotal: boArr
        }
        this.props.addOrder(item);
      }
    }
  };

  onClick = index => {
    const boArr = this.state.data;
    // console.log('[DATA]', boArr);
    boArr[index].value = true;

    if (boArr[index - 1] == undefined){
      let dataAff = boArr[index + 1].value
      if(dataAff == true) {
        boArr[index + 1].value = true
      } else if(dataAff == 'booked'){
        boArr[index + 1].value = 'booked'
      } else{
        boArr[index + 1].value = 'avail';
      }
    } else if(boArr[index + 1] == undefined){
      let dataBef = boArr[index - 1].value
      if(dataBef == true) {
        boArr[index - 1].value = true
      } else if(dataBef == 'booked'){
        boArr[index - 1].value = 'booked'
      } else{
        boArr[index - 1].value = 'avail';
      }
    } else {
      let dataBef = boArr[index - 1].value
      let dataAff = boArr[index + 1].value

      if(dataBef == true) {
        boArr[index - 1].value = true
      } else if(dataBef == 'booked'){
        boArr[index - 1].value = 'booked'
      } else{
        boArr[index - 1].value = 'avail';
      }

      if(dataAff == true) {
        boArr[index + 1].value = true
      } else if(dataAff == 'booked'){
        boArr[index + 1].value = 'booked'
      } else{
        boArr[index + 1].value = 'avail';
      }
    }

    // console.log(['CONDITION'], boArr);
 
    const manBo = boArr.map(obj => ({ 
      "key": obj.key,
      "price": obj.price,
      "value": 
        obj.value === 'booked' ? 'booked' : 
        obj.value === true ? true:
        obj.value === 'avail' ? 'avail':
        obj.value === 'block' ? 'block':
        (obj.value === false ? 'block' : null)
    })); 

    this.setState({data: manBo});

    let item = {
      title: this.props.title,
      order: manBo
    }
    this.props.addOrder(item);
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

export default connect(null, {addOrder})(Accordian)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.2,
    height: 40,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    // fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: '#229CE0',
    backgroundColor: '#229CE0',
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  InActive: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  OnActive: {
    borderColor: 'blue',
    backgroundColor: 'blue',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: Colors.GRAY,
    borderWidth: 1,
    // borderColor: 'red',
    margin: 5,
    justifyContent: 'center'
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  font: {
    fontSize: 16,
    textAlign: 'center',
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});
