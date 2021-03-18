import React, { useContext, useEffect, useState } from 'react';
import { Alert, Platform, RefreshControl, Animated, View } from 'react-native'

import { Container, Scroller, Header, HeaderText, SearchButton, Location, LocationInput, LocationFinder, LoadingIcon, ListContainer, FlatList } from './styles';

import SearchIcon from '../../../../assets/search.svg'
import MyLocationIcon from '../../../../assets/my_location.svg'
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from 'styled-components';

// import { request, PERMISSIONS } from 'react-native-permissions'
// import Geolocation from '@react-native-community/geolocation'
import Api from '../../../../services/Api';
import ListItem from '../../../../components/UserItem';

const Home = () => {

  const [locationField, setLocationField] = useState('')
  const [coords, setCoords] = useState(null)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [list, setList] = useState([])

  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  const navigation = useNavigation()
  const theme = useContext(ThemeContext)

  async function getBarbers() {
    setLoading(true)
    setList([])
    let lat = coords ? coords.latitude : null
    let long = coords ? coords.longitude : null

    const response = await Api.getUsers(lat, long, locationField)

    if (response.error === '') {
      if (response.loc) {
        setLocationField(response.loc)
      }
      setList(response.data)
      setLoading(false)
    } else {
      Alert.alert("Erro:" + response.error)
    }
  }

  function handleLocationSearch() {
    setCoords({})
    getBarbers()
  }

  useEffect(() => {
    getBarbers()
  }, [])

  function onRefresh() {
    setRefreshing(false)
    getBarbers()
  }

  // async function handleLocationFinder() {
  //   const result = await request(
  //     Platform.OS === 'ios' ?
  //       PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  //       :
  //       PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  //   )

  //   if (result == 'granted') {
  //     Geolocation.getCurrentPosition(info => {
  //       setLoading(true)
  //       setLocationField('')

  //       setCoords(info.coords)

  //       getBarbers()
  //     })
  //   }
  // }

  return (
    <Container>
      <Scroller
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }
        horizontal={false}
      >
        <Header style={{
            height: scrollY.interpolate({
            inputRange: [70, 160],
            outputRange: [70, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [60, 145],
            outputRange: [1, 0],
            extrapolate: 'clamp'
          }),
          marginBottom: scrollY.interpolate({
            inputRange: [10, 70],
            outputRange: [30, -10],
            extrapolate: 'clamp'
          }),

        }}>
          <HeaderText numberOfLines={2}>Encontre os usuarios proximos</HeaderText>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill={theme.textInverted} />
          </SearchButton>
        </Header>

        <Location>
          <LocationInput
            placeholder='Onde você esta?'
            placeholderTextColor={theme.textInverted}
            value={locationField}
            onChangeText={e => setLocationField(e)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder>
            <MyLocationIcon width='24' height='24' fill={theme.textInverted} />
          </LocationFinder>
        </Location>

        {loading && <LoadingIcon size='large' color={theme.textInverted} />}
        <ListContainer>
          {list.map((item, i) => (
            <ListItem data={item} key={i} />
          ))}
        </ListContainer>

      </Scroller>
    </Container>
  );
}

export default Home;
