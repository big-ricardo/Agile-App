import React, { useContext, useEffect } from 'react';

import { Container, LoadingIcon } from './styles';

import BarberSVG from '../../../../assets/icon.svg';
import { ThemeContext } from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import Api from '../../../../services/Api';
import { UserContext } from '../../../../contexts/User';

const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!token) {
        navigation.navigate('SignIn')

      } else {
        const response = await Api.checkToken(token)
        if (response.token) {
          await AsyncStorage.setItem('token', response.token)
          userDispatch({
            type: 'setUser',
            payload: {
              token: response.token,
              ...response.data
            }
          })
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
      <BarberSVG width="100%" height={160} fill={theme.primary}/>
      <LoadingIcon size="large" color={theme.textInverted} />
    </Container>
  );
};

export default Preload;
