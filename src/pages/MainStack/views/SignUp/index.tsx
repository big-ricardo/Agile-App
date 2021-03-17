import React, { useState } from 'react';

import { Container, InputContainer, Button, Text, LabelContainer, Label, LabelBold } from './styles';
import InputComponent from '../../../../components/InputComponent'
import {useNavigation} from '@react-navigation/native'

import BarberSVG from '../../../../assets/barber.svg'
import PersonIcon from '../../../../assets/person.svg'
import EmailIcon from '../../../../assets/email.svg'
import LockIcon from '../../../../assets/lock.svg'

import { Alert } from 'react-native';

const SignUp = () => {
  const navigate = useNavigation()

  const [userField, setUserField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  async function HandlerLogin(){
    if(userField !== '' && emailField !== '' && passwordField !== ''){
      // const response = await Api.signUp(userField, emailField, passwordField)
      if(true){
        navigate.reset({
          routes: [{ name: 'SignIn' }]
        })
      }else{
        Alert.alert("Erro:" +" response.error")
      }

    }else{
      Alert.alert("Preencha os campos!")
    }
  }

  return (
    <Container>
      <BarberSVG width='100%' height={160} />

      <InputContainer>

        <InputComponent Icon={PersonIcon} placeholder='Digite seu Nome...' value={userField} onChangeText={e => setUserField(e)} autoCompleteType='username' />
        <InputComponent Icon={EmailIcon} placeholder='Digite seu email...' value={emailField} onChangeText={e => setEmailField(e)} autoCompleteType='email' />
        <InputComponent Icon={LockIcon} placeholder='Digite sua senha...' value={passwordField} onChangeText={e => setPasswordField(e)} secureTextEntry={true} autoCompleteType='password' />
        <Button onPress={HandlerLogin}>
          <Text>Login</Text>
        </Button>

      </InputContainer>

      <LabelContainer onPress={()=> navigate.reset({
        routes: [{name: 'SignIn'}]
      })}>
        <Label>Já possui uma conta?</Label>
        <LabelBold>Faça Login</LabelBold>
      </LabelContainer>

    </Container>
  );
}

export default SignUp;
