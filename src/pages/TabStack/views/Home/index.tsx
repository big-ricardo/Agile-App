import React, { useContext, useEffect, useState } from 'react';
import { Alert, RefreshControl, Animated, View } from 'react-native';

import {
  Container,
  Header,
  HeaderText,
  SearchButton,
  Location,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListContainer,
  FlatList,
} from './styles';

import SearchIcon from '../../../../assets/search.svg';
import MyLocationIcon from '../../../../assets/my_location.svg';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from 'styled-components';
import * as geoLocation from 'expo-location';

// import { request, PERMISSIONS } from 'react-native-permissions'
// import Geolocation from '@react-native-community/geolocation'
import Api from '../../../../services/Api';
import ListItem from '../../../../components/UserItem';

const Home = () => {
  const [locationField, setLocationField] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);
  const [pagina, setPg] = useState(1);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  async function getBarbers(pg = 1) {
    setLoading(true);
    let lat = coords ? coords.latitude : null;
    let long = coords ? coords.longitude : null;

    const response = await Api.getUsers(lat, long, locationField);
    setPg(pg + 1);

    if (response.error === '') {
      if (response.loc) {
        setLocationField(response.loc);
      }
      if (pg === 1) {
        setList(response.data);
      } else {
        // setList([...list, ...response.data]);
        console.log('reload');
      }
    } else {
      Alert.alert('Erro:' + response.error);
    }
    setLoading(false);
    setRefreshing(false);
  }

  function handleLocationSearch() {
    setCoords({});
    getBarbers();
  }

  function onRefresh() {
    setRefreshing(true);
    getBarbers();
  }

  useEffect(() => {
    (async () => {
      await getLocation();
      getBarbers();
    })();
  }, []);

  async function getLocation() {
    let { status } = await geoLocation.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada!');
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await geoLocation.getCurrentPositionAsync({});
    setLoading(true);
    setLocationField('');
    setCoords({ latitude, longitude });
    console.log();
  }

  const HeaderComponent = (props) => (
    <>
      <Header
        {...props}
        style={{
          height: scrollY.interpolate({
            inputRange: [70, 160],
            outputRange: [70, 0],
            extrapolate: 'clamp',
          }),
          opacity: scrollY.interpolate({
            inputRange: [30, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
          marginBottom: scrollY.interpolate({
            inputRange: [10, 70],
            outputRange: [30, 73],
            extrapolate: 'clamp',
          }),
        }}
      >
        <HeaderText numberOfLines={2}>Encontre os usuarios proximos</HeaderText>
        <SearchButton onPress={() => navigation.navigate('Search')}>
          <SearchIcon width="26" height="26" fill={theme.textInverted} />
        </SearchButton>
      </Header>

      <Location>
        <LocationInput
          placeholder="Onde você esta?"
          placeholderTextColor={theme.textInverted}
          value={locationField}
          onChangeText={(e) => setLocationField(e)}
          onEndEditing={handleLocationSearch}
        />
        <LocationFinder onPress={() => getLocation()}>
          <MyLocationIcon width="24" height="24" fill={theme.textInverted} />
        </LocationFinder>
      </Location>
    </>
  );

  return (
    <Container>
      <ListContainer>
        <FlatList
          data={list}
          keyExtractor={(item:{name:string}) => item.name + pagina}
          renderItem={({ item }) => <ListItem data={item} />}
          refreshing={refreshing}
          onRefresh={onRefresh}
          scrollEventThrottle={20}
          ListFooterComponent={
              <View style={{ height: 100 }}>
                {loading && (
                  <LoadingIcon size="large" color={theme.textInverted} />
                )}
              </View>
          }
          ListHeaderComponent={<HeaderComponent />}
          showsVerticalScrollIndicator={false}
          onEndReached={() => getBarbers()}
          onEndReachedThreshold={0.1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Home;
