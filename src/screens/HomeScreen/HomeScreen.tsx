import React from 'react';
import {useLingui} from "@lingui/react/macro";
import {Text} from "react-native";

export const HomeScreen = () => {
  const {t} = useLingui();

  return (
    <Text style={{color: 'red'}}>
      {t`Hello World`}
    </Text>
  );
};
