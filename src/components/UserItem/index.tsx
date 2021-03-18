import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Stars from '../Stars'
import { Container, Avatar, Info, Username, SeeProfile, SeeProfileText } from './styles';

const ListItem = ({ data }) => {
    const navigation = useNavigation()
    function HandleClick(){
        navigation.navigate('User', {...data})
    }

    return (
        <Container>
            <Avatar source={{ uri: data.avatar }} />
            <Info>
                <Username>{data.name}</Username>
                <Stars stars={data.stars} showNumber={true} />
                <SeeProfile onPress={HandleClick}>
                    <SeeProfileText>Ver Perfil</SeeProfileText>
                </SeeProfile>
            </Info>
        </Container>
    );
}

export default ListItem;
