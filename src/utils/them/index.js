import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const mainColors = {
  green: '#88CD0C',
  green2: 'green',
  greenPastel : '#f3fae6',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#C4C4C4',
  greytxt: '#707070',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  blue1: '#0066CB',
  blue: '#3498db',
  red1: '#E06379',
  lightgrey: '#bdc3c7',
  lightgrey2: '#F7F7F7',
  white: '#ffff',
};

export const COLORS = {
  primary: mainColors.green,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  active: mainColors.green,
  inactive: mainColors.grey4,
  greyTxt: mainColors.greytxt,
  greenpastel: mainColors.greenPastel,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green,
      text: 'white',
    },
    secondary: {
      background: '#C7C6C3',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.white,
    },
  },
  border: mainColors.grey2,
  greyLight: mainColors.lightgrey,
  greyLight2: mainColors.lightgrey2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
  green: mainColors.green2,
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  primary: {
    200: 'Nunito-ExtraLight',
    300: 'Nunito-Light',
    400: 'Nunito-Regular',
    600: 'Nunito-SemiBold',
    700: 'Nunito-Bold',
    800: 'Nunito-ExtraBold',
    900: 'Nunito-Black',
    normal: 'Nunito-Regular',
  },
  secondary: {
    200: 'OpenSans-ExtraLight',
    300: 'OpenSans-Light',
    400: 'OpenSans-Regular',
    600: 'OpenSans-SemiBold',
    700: 'OpenSans-Bold',
    800: 'OpenSans-ExtraBold',
    900: 'OpenSans-Black',
    normal: 'OpenSans-Regular',
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
