import {Dimensions} from 'react-native';
import {widthPercentageToDP as wp} from '../Helper/ResponsiveSize';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const scaleWidth = SCREEN_WIDTH / 375;
export const scaleHeight = SCREEN_HEIGHT / 812;
export const _scale = Math.min(scaleWidth, scaleHeight);

export function normalize(size) {
  return Math.ceil(size * _scale);
}

export const sizes = {
  FONT_SIZE_XX_SMALL: wp('2.7'), //10
  FONT_SIZE_EXTRA_SMALL: wp('2.9'), //11,
  FONT_SIZE_SMALL: wp('3.2'), //12
  FONT_SIZE_LOW_MEDIUM: wp('3.3'), //13
  FONT_SIZE_MEDIUM: wp('3.6'), //14
  FONT_SIZE_LARGE: wp('4.1'), //16
  FONT_SIZE_HLARGE: wp('4.6'), //18
  FONT_SIZE_XLARGE: wp('5.1'), //20
  FONT_SIZE_MARGE: wp('5.7'), //22
  FONT_SIZE_XXLARGE: normalize(36),
  FONT_SIZE_XXXLARGE: normalize(44),
  FONT_SIZE_XMEDIUM: normalize(17),
  FONT_SIZE_XXMEDIUM: wp('5.1'), //20
  FONT_SIZE_XXMEDIUMLARGE: wp('6.1'), //24
  FONT_SIZE_XXXMEDIUMLARGE: wp('7.5'), //31
  FONT_SIZE_XXXXMEDIUMLARGE: wp('7.7'), //32
  FONT_SIZE_XXLMEDIUMLARGE: wp('6.4'), //25
  FONT_SIZE_XLXLARGE: wp('8.7'), //34
  FONT_SIZE_XLMEDIUMLARGE: wp('6.7'), //26
  FONT_SIZE_XXVMEDIUMLARGE: wp('7'), //27
  PRIMARY_BTN_HEIGHT: wp('13'), //55,
  SECONDARY_BTN_HEIGHT: wp('7.5'), //30,
  PRIMARY_LINE_HEIGHT: wp('5.1'), //20
  LINE_HEIGHT_22: wp('5.7'), //22
  TITLE_LINE_HEIGHT: wp('8.7'), //34
  SECONDARY_LINE_HEIGHT: wp('6.1'), //24
  BORDER_CONTAINER: normalize(8), //35
  CONTAINER_MARGIN_TOP: normalize(15),
  BORDER_RADIOUS: normalize(20),
  BTN_BORDER_RADIOUS: normalize(30),
  BASE: normalize(10),
  CONTAINER_RADIUS: normalize(Platform.OS === 'android' ? 18 : 9) * 2,
  SCREEN_WIDTH: SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT,
  SCREEN_HEIGHT: SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_HEIGHT : SCREEN_WIDTH,
  CONTAINER_PADDING: normalize(16),
  MAIN_RADIOUS: normalize(24),
  CONTAINER_PADDING_VERTICAL: normalize(24),
  TAB_BAR_HEIGHT: normalize(90),
  CARD_HEIGHT: SCREEN_WIDTH * 0.71,
};

export const weight = {
  FONT_WEIGHT_BLACK: '900',
  FONT_WEIGHT_NULL: null,
  FONT_WEIGHT_HEAVY: '800',
  FONT_WEIGHT_BOLD: '700',
  FONT_WEIGHT_SEMIBOLD: '600',
  FONT_WEIGHT_NORMAL: 'normal',
  FONT_WEIGHT_MEDIUM: '500',
  FONT_WEIGHT_REGULAR: '400',
};

export const color = {
  WHITE: '#FFFFFF',
  WHITE_SMOKE: '#F5F5F5',
  WHITE_2: '#FBF0EE',
  WHITE_15: 'rgba(255, 255, 255, 0.15)',
  WHITE_30: 'rgba(255, 255, 255, 0.3)',
  WHITE_40: 'rgba(255, 255, 255, 0.44)',
  WHITE_55: 'rgba(255, 255, 255, 0.55)',
  WHITE_60: 'rgba(255, 255, 255, 0.6)',
  WHITE_66: 'rgba(255, 255, 255, 0.66)',
  WHITE_88: 'rgba(255, 255, 255, 0.88)',
  MAIN_BLUE: '#627EEA',
  BLUE_1: '#3E9AFF',
  BLUE_7: 'rgba(98, 126, 234, 0.07)',
  BLUE_2: 'rgba(39, 117, 202, 0.29)',
  BLACK: '#000000',
  BLACK_80: 'rgba(0, 0, 0, 0.88)',
  DARK_GREEN: '#1E2328',
  DARK_GREEN_1: '#202020',
  GREEN_1: '#1A1A1A',
  GREEN_2: '#272727',
  GREEN_3: 'rgba(30, 35, 40, 0.03)',
  GREEN_4: '#161616',
  GREEN_5: '#121212',
  GREEN_6: '#191919',
  GREEN_7: '#79FF6D',
  GREEN_8: '#79FF6D',
  GREY: '#808080',
  GREY_14: 'rgba(128, 128, 128, 0.14)',
  GREEN_POP: '#79FF6D',
  PINK: '#FFD7ED',
  PINK_1: '#EBEBEB',
  MAIN_DARK: '#0C0C0C',
  MAIN_RED: '#FC3400',
  MAIN_GREEN: '#0A8300',
  ORANGE: '#EFB216',
  START_GRADIENT: 'rgba(26, 26, 26, 1)',
  END_GRADIENT: 'rgba(26, 26, 26, 0)',
  FUND_START_GRADIENT: 'rgba(39, 39, 39,1)',
  FUND_END_GRADIENT: 'rgba(39, 39, 39,0)',
  PRIMARY_TEXT: '#FFFFFF',
  TRANSPARENT: 'transparent',
  WHITE_100: 'rgba(255, 255, 255, 1)',
  WHITE_22: 'rgba(255, 255, 255, 0.22)',
  WHITE_55: 'rgba(255, 255, 255, 0.5)',
  WHITE_16: 'rgba(255, 255, 255, 0.16)',
  WHITE_04: 'rgba(255, 255, 255, 0.04)',
  MAIN_DARK_100: 'rgba(12, 12, 12, 1)',
  MAIN_DARK_66: 'rgba(12, 12, 12, 0.66)',
  MAIN_DARK_50: 'rgba(12, 12, 12, 0.5)',
  MAIN_DARK_33: 'rgba(0, 0, 0, 0.33)',
  MAIN_DARK_03: 'rgba(30, 35, 40, 0.03)',
  MAIN_DARK_06: 'rgba(30, 35, 40, 0.06)',
  GRAY_100: 'rgba(142, 142, 142, 1)',
  PURPLE_100: 'rgba(128, 108, 255, 1)',
  LIGHT_BLACK_100: 'rgba(25, 25, 25, 1)',
  INDICATOR_ACTIVE: 'rgba(255, 255, 255, 1)',
  INDICATOR_INACTIVE: 'rgba(76, 76, 76, 1)',
  HIGHLIGHT: '#C8A6FF',
  INFO_YELLOW: '#EFB216',
  POPULAR_PURPLE:'#C8A6FF',
  MATIC_PURPLE: '#8745E1',
  PURPLE_LIGHT: 'rgba(188, 160, 255, 1)',
};

export const Fonts = {
  regular: 'NunitoSans-Regular',
  light: 'NunitoSans-Light',
  bold: 'NunitoSans-Bold',
  black: 'NunitoSans-Black',
  italic: 'NunitoSans-Italic',
  semibold: 'NunitoSans-SemiBold',
};
