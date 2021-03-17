import React, { useContext, useEffect } from 'react';

import { Container, LoadingIcon } from './styles';

import BarberSVG from '../../../../assets/barber.svg';
import { ThemeContext } from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const Preload = (props) => {
  // const { dispatch: userDispatch } = useContext(UserContext)
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      navigation.navigate('SignIn')
      if (token) {
      } else {
        // const response = await Api.checkToken(token)
        if (true) {
          // await AsyncStorage.setItem('token', response.token)
          // userDispatch({
          //   type: 'setAvatar',
          //   payload: {
          //     avatar: response.data.avatar
          //   }
          // })
          navigation.reset({
            routes: [{ name: 'MainTab' }]
          })
        } else {
          navigation.navigate('SignIn')
        }
      }
    }
    checkToken()
  }, [])

  return (
    <Container>
      <BarberSVG width="100%" height={160} />
      <LoadingIcon size="large" color={theme.textInverted} />
    </Container>
  );
};

export default Preload;
