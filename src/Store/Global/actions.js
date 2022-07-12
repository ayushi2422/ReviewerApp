import * as types from './actionTypes';

export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});
export const noInternetConnected = isConnected => ({
  type: types.IS_INTERNET_CONNECTED,
  payload: isConnected,
});
const onError = data => ({type: types.ON_ERROR_RECEIVED, payload: data});

export const userDetail = userData => ({
  type: types.USER_DETAIL,
  payload: userData,
});

export const loginDetail = userData => ({
  type: types.LOGIN_DETAIL,
  payload: userData,
});

export const showBiometricPop = value => ({
  type: types.BIOMETRIC_POPUP,
  payload: value,
});

export const setTotalPortfolio = userData => ({
  type: types.TOTAL_PORTFOLIO,
  payload: userData,
});

export const setReferralCode = code => ({
  type: types.REFERRAL_CODE,
  payload: code
})

export const setInterestRates = rate => ({
  type: types.INTEREST_RATE,
  payload: rate
})
