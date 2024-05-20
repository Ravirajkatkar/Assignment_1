import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import _map_screen from '../screens/map_screen/map.index';
import _movies_screen from '../screens/movies_screen/movies.index';
import {SemiBold} from '../../assets/fonts/font.index';
import {useSelector} from 'react-redux';
import _profile_screen from '../screens/profile_screen/profile.index';

const Tab = createBottomTabNavigator();

export default function _bottom_navigation() {
  const Theme = useSelector(state => state._selected_theme);

  //********************************************* Styles ***********************************************//

  const styles = StyleSheet.create({
    tab_bar: {
      elevation: 0,
      height: 70,
      backgroundColor: Theme.Endeavour_blue,
    },
    center: {alignItems: 'center', justifyContent: 'center'},
    tab_img: {
      height: 45,
      width: 45,
      tintColor: Theme.White,
    },
    tab_text: {
      fontSize: 15,
      bottom: 4,
      color: Theme.White,
      fontFamily: SemiBold,
    },
  });

  //********************************************* Design ***********************************************//

  return (
    <Tab.Navigator
      initialRouteName="Map"
      activeColor="#009DC2"
      shifting={true}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tab_bar,
      }}>
      <Tab.Screen
        name="Movies"
        component={_movies_screen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.center}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/_movie.png')}
                  style={styles.tab_img}
                />
                {focused ? <Text style={styles.tab_text}>Movies</Text> : null}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={_map_screen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.center}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/_map.png')}
                  style={styles.tab_img}
                />
                {focused ? <Text style={styles.tab_text}>Map</Text> : null}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={_profile_screen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.center}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/_profile.png')}
                  style={styles.tab_img}
                />
                {focused ? <Text style={styles.tab_text}>Profile</Text> : null}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
