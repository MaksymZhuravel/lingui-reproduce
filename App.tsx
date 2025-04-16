/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {messages} from './src/locales/en/messages';
import {i18n} from "@lingui/core";
import {I18nProvider} from "@lingui/react";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "./src/screens/HomeScreen/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";

i18n.loadAndActivate({ locale: "en", messages });

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <I18nProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nProvider>
  );
}

export default App;
