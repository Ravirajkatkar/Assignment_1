import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import _stack_Navigation from './src/source/navigation/stack.index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import store from './src/source/redux/store/store.index';

const Root = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const BackgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const StatusBar = isDarkMode ? Colors.darker : Colors.lighter;
  const Text = isDarkMode ? Colors.lighter : Colors.darker;

  const _dispatch = useDispatch();
  React.useEffect(() => {
    _dispatch({
      type: 'set_theme',
      payload: {
        isMode: isDarkMode,
        BackgroundColor: BackgroundColor,
        StatusBar: StatusBar,
        Text: Text,
        White: '#FFFFFF',
        Black: '#000000',
        Endeavour_blue: '#1F5B8C',
      },
    });
  }, [isDarkMode]);

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen
          name="Root"
          options={{headerShown: false}}
          component={_stack_Navigation}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
