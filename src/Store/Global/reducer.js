import * as types from './actionTypes';

const initialState = {
  loading: false,
  userDetail: {},
  isInternetConnected: true,
  errorMessage: '',
  isError: false,
  loginDetail: {},
  biometricPopup: true,
  totalPortfolioValue: 0,
  referralCode: '',
  interestRate: null
};

const global = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.API_LOADING_START:
      return { ...state, loading: true };
    case types.API_LOADING_STOP:
      return { ...state, loading: false };
    case types.ON_ERROR_RECEIVED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
        isError: action.payload.type,
      };
    case types.IS_INTERNET_CONNECTED:
      console.warn(action.payload);
      if (action.payload === false) {
        return { ...state, isInternetConnected: action.payload, loading: false };
      } else {
        return { ...state, isInternetConnected: action.payload };
      }
    case types.USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case types.TOTAL_PORTFOLIO:
      return {
        ...state,
        totalPortfolioValue: action.payload,
      };
    case types.LOGIN_DETAIL:
      return {
        ...state,
        loginDetail: action.payload,
      };
    case types.BIOMETRIC_POPUP:
      return {
        ...state,
        biometricPopup: action.payload,
      };
    case types.REFERRAL_CODE:
      console.log('referral_code_global', action.payload)
      return {
        ...state,
        referralCode: action.payload
      }
    case types.INTEREST_RATE:
      console.log('interest_rate', action.payload)
      return {
        ...state,
        interestRate: action.payload
      }
    default:
      return state;
  }
};

export default global;
