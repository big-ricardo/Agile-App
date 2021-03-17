import React, { useContext, useState } from 'react';

import { Container, InputContainer, Button, Text, LabelContainer, Label, LabelBold } from './styles';
import InputComponent from '../../../../components/InputComponent'
import { useNavigation } from '@react-navigation/native'

// import Api from '../../../Api'

import BarberSVG from '../../../../assets/barber.svg'
import EmailIcon from '../../../../assets/email.svg'
import LockIcon from '../../../../assets/lock.svg'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { UserContext } from '../../../contexts/User';

const SignIn = () => {
  //const {dispatch: userDispatch} = useContext(UserContext)
  const navigate = useNavigation()

  const [userField, setUserField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  async function HandlerLogin() {

    if (userField !== '' && passwordField !== '') {
      // const response = await Api.signIn(userField, passwordField)

      if (false) {
        // await AsyncStorage.setItem('token', response.token)
        // userDispatch({
        //   type: 'setAvatar',
        //   payload:{
        //     avatar:response.data.avatar
        //   }
        // })

        navigate.reset({
          routes: [{ name: 'MainTab' }]
        })

      } else {
        Alert.alert("Email ou senha Invalidos!")
      }

    } else {
      Alert.alert("Preencha os campos!")
    }
  }

  return (
    <Container>
      <BarberSVG width='100%' height={160} />

      <InputContainer>

        <InputComponent Icon={EmailIcon} placeholder='Digite seu email...' value={userField} onChangeText={e => setUserField(e)} autoCompleteType='email' />
        <InputComponent Icon={LockIcon} placeholder='Digite sua senha...' value={passwordField} onChangeText={e => setPasswordField(e)} secureTextEntry={true} autoCompleteType='password' />
        <Button onPress={HandlerLogin}>
          <Text>Login</Text>
        </Button>

      </InputContainer>

      <LabelContainer onPress={() => navigate.reset({
        routes: [{ name: 'SignUp' }]
      })}>
        <Label>Ainda não possui uma conta?</Label>
        <LabelBold>Cadastra-se</LabelBold>
      </LabelContainer>

    </Container>
  );
}

export default SignIn;
