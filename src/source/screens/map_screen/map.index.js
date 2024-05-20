import React from 'react';
import {View, Text, StatusBar, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ExtraBold} from '../../../assets/fonts/font.index';
import {useSelector} from 'react-redux';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default function _map_screen() {
  const navigation = useNavigation();
  const Theme = useSelector(state => state._selected_theme);

  //********************************************* Styles ***********************************************//

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.BackgroundColor,
    },
    login_text: {
      color: Theme.Text,
      fontSize: 35,
      fontFamily: ExtraBold,
    },
  });

  //********************************************* Dummy Data ***********************************************//

  const _mapStyle = [
    [
      {
        featureType: 'transit.station.airport',
        stylers: [
          {
            color: '#3dffdf',
          },
          {
            visibility: 'on',
          },
        ],
      },
    ],
  ];

  const markers = [
    {
      id: 1,
      latlng: {
        latitude: 18.441907,
        longitude: 73.836238,
      },
      title: 'Shri Swaminarayan Mandir',
      description:
        'There is no entry and no camera fee to enter the Shree Swaminarayan Mandir. For Murti darshan, the timings are 7 am to noon and 4 pm to 8.30 pm.',
    },
    {
      id: 2,
      latlng: {
        latitude: 18.451537,
        longitude: 73.859442,
      },
      title: 'Rajiv Gandhi Zoological Park',
      description:
        'Rajiv Gandhi Zoological Park, popularly known as the Rajiv Gandhi Zoo or Katraj Zoo, is situated in Katraj, Pune district, Maharashtra State, India.',
    },
    {
      id: 3,
      latlng: {
        latitude: 18.472959,
        longitude: 73.840143,
      },
      title: 'Taljai Tekdi',
      description:
        'Taljai Hills (or Taljai Tekdi) is a hillock developed as a park and wildlife reserve. It is rich in biodiversity and attracts many migratory birds.',
    },
    {
      id: 4,
      latlng: {
        latitude: 18.561781,
        longitude: 73.916047,
      },
      title: 'Phoenix Market City Mall',
      description:
        'Experience delicious and tasty meals with the only restaurants in phoenix mall with spacious food corners of places to eat in Phoenix Marketcity',
    },
    {
      id: 6,
      latlng: {
        latitude: 18.519228,
        longitude: 73.85525,
      },
      title: 'Shaniwar Wada',
      description:
        'Shaniwar Wada is a historical fortification in the city of Pune, India. Shaniwar Wada. Location, Pune, India. Built, 1732; 292 years ago (1732).',
    },
  ];
  //********************************************* Design ***********************************************//

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={Theme.StatusBar} />
      <View style={styles.container}>
        <Text style={styles.login_text}>Goggle Map</Text>
        <MapView
          style={{width: width, height: height - 40}}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          customMapStyle={_mapStyle}
          zoomEnabled={true}
          zoomControlEnabled={false}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: 18.520358,
            longitude: 73.856745,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}
