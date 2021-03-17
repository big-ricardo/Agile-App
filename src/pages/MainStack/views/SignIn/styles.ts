import React, {useContext} from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: ${props=> props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center
`

export const InputContainer = styled.View`
    padding: 40px;
    width: 100%
`

export const Button = styled.TouchableOpacity`
    height: 60px;
    background-color: ${props=> props.theme.primary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    font-size: 18px;
    color: ${props=>props.theme.textInverted}
`

export const LabelContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px
`

export const Label = styled.Text`
    font-size: 16px;
    color: ${props=>props.theme.text};
    opacity: 0.4
`
export const LabelBold = styled.Text`
    font-size: 16px;
    color: ${props=>props.theme.text};
    font-weight: bold;
    margin-left: 5px;
    opacity: 0.4
`