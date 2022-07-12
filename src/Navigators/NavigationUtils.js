import {CommonActions, useRoute} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const navigateAndSimpleReset = (name, index = 0) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name}],
    }),
  );
};

export const navigateAndSimpleResetWithParam = (name, index = 0, param) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: index,
      routes: [
        {
          name: name,
          params: param,
        },
      ],
    }),
  );
};

export const navigateTOKYCScren = (name, value) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: {
            isSkippable: value,
          },
        },
      ],
    }),
  );
};

export const getParams = () => {
  return useRoute().params;
};
