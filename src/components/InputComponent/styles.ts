import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${props=>props.theme.second};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px
`
export const Input = styled.TextInput`
   flex: 1;
    font-size: 16px;
    color: ${props=> props.theme.text};
    margin-left: 10px
`
