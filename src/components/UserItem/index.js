import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import Stars from '../Stars'
import { Container, Avatar, Info, Username, SeeProfile, SeeProfileText } from './styles';

const ListItem = ({ data }) => {
    const navigation = useNavigation()
    function HandleClick(){
        navigation.navigate('User', {...data})
    }

    return (
        <Container onPress={HandleClick}>
            <Avatar source={{ uri: data.avatar }} />
            <Info>
                <Username>{data.name}</Username>
                <Stars stars={data.stars} showNumber={true} />
                <SeeProfile>
                    <SeeProfileText>Ver Perfil</SeeProfileText>
                </SeeProfile>
            </Info>
        </Container>
    );
}

export default ListItem;