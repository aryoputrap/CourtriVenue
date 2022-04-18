/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';

import {
  Splash,
  Started,
  SignIn,
  SignUp,
  OTP,
  // GetStarted,
  News,
  Inbox,
  MePage,
  Home,
  FindCourt,
  //HOME
  BoCourt,
  BoConfrim,
  Promo,
  Payment,
  PaymentDetail,
  //Booking
  Booking,
  HistoryBooking,
  UpcommingBooking,
  TodayBooking,
  //ME
  Courtri,
  Pengaturan,
  Syarat,
  Scan,
  Withdraw,
  InfoVanue,
  InfoField,
  EditVanue,
  AddField,
  AddSetClose,
  Venue,
} from '../pages';
import {COLORS} from '../utils';
import {
  BookingIcn,
  Booking2,
  Shop,
  Shop2,
  Me,
  Me2,
  Mail,
  Mail2,
  NewsIcn,
  News2,
  Camera,
  Camera2,
} from '../asset';
import { Styles } from '../pages/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, title, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          {/* <View style={{flex: 1, backgroundColor: COLORS.white}} /> */}
          {/* <Svg width={30} height={30} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={'red'}
            />
          </Svg> */}
          {/* <View style={{flex: 1, backgroundColor: COLORS.white}} /> */}
        </View>
        <TouchableOpacity style={styles.svg} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.inActive}
        activeOpacity={1}
        onPress={onPress}>
        {children}
        <View style={styles.inActiveTitle}>
          <Text style={{fontSize: 12}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = props => {
  return <BottomTabBar {...props.props} />;
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: false,
        tabStyle: {
          paddingVertical: 100,
        },
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          height: 70,
          // backgroundColor: 'transparent',
          // backgroundColor: 'red',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconScan}>
            {focused ?
              <View style={styles.iconBg}>
                <Image
                  source={Shop}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
              </View>
              :
                <Image
                  source={Shop2}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
            }
          </View>
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} title={'Home'} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconScan}>
              {focused ?
              <View style={styles.iconBg}>
                <Image
                  source={Booking2}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
              </View>
              :
                <Image
                  source={BookingIcn}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
              }
            </View>
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} title={'Order'} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconScan}>
              {focused ?
              <View style={styles.iconBg}>
                <Image
                  source={Camera2}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
              </View>
              :
                <Image
                  source={Camera}
                  resizeMode="contain"
                  style={styles.iconCam}
                />
              }
            </View>
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} title={'Scan'} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconScan}>
            {focused ?
            <View style={styles.iconBg}>
              <Image
                source={Mail2}
                resizeMode="contain"
                style={styles.iconCam}
              />
            </View>
            :
              <Image
                source={Mail}
                resizeMode="contain"
                style={styles.iconCam}
              />
            }
          </View>
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} title={'Inbox'} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconScan}>
            {focused ?
            <View style={styles.iconBg}>
              <Image
                source={Me}
                resizeMode="contain"
                style={styles.iconCam}
              />
            </View>
            :
              <Image
                source={Me2}
                resizeMode="contain"
                style={styles.iconCam}
              />
            }
          </View>
          ),
          tabBarButton: props => (
            <TabBarCustomButton {...props} title={'Me'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Started"
        component={Started}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      {/* // ============================================================ HOME ============================== */}
      <Stack.Screen
        name="FindCourt"
        component={FindCourt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BoCourt"
        component={BoCourt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BoConfrim"
        component={BoConfrim}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Promo"
        component={Promo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentDetail"
        component={PaymentDetail}
        options={{headerShown: false}}
      />
      {/*=================================================== BOOKING ==============================================*/}
      <Stack.Screen
        name="TodayBooking"
        component={TodayBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpcommingBooking"
        component={UpcommingBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryBooking"
        component={HistoryBooking}
        options={{headerShown: false}}
      />
      {/* ====================================================== ME =================================*/}
      <Stack.Screen
        name="Courtri"
        component={Courtri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Syarat"
        component={Syarat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Infovanue"
        component={InfoVanue}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editvanue"
        component={EditVanue}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Venue"
        component={Venue}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Infofield"
        component={InfoField}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addfield"
        component={AddField}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSetClose"
        component={AddSetClose}
        options={{headerShown: false}}
      />
      {/* MAIN APP */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 20,
    // paddingTop: 20,
  },
  iconCam: {
    width: 25,
    height: 25,
  },
  iconScan: {
    width: 50,
    height: 30,
    paddingTop: 20,
    // borderTopWidth: 3,
    // borderColor: 'green',
    // borderWidth: 1,
    // borderTopColor: 'pink',
    borderRadius: 100,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // borderTopColor: 'transparent',
  },
  iconBg: {
    backgroundColor: COLORS.greenpastel,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inActive: {
    flex: 1,
    height: '80%',
    backgroundColor: COLORS.white,
  },
  inActiveTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  svg: {
    top: -5.5,
    // bottom: -25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.yellow,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white,
  },
});
