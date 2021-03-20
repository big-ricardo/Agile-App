import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props=>props.theme.second};
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`

export const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`

export const Info = styled.View`
    margin-left:20px;
    justify-content: space-between;
`

export const Username = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props=>props.theme.text}
`

export const SeeProfile = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    border: 1px solid ${props=>props.theme.second};
    border-radius: 10px;
    justify-content: center;
    align-items: center
`

export const SeeProfileText = styled.Text`
    font-size: 13px;
    color: ${props=>props.theme.tabColor}
`
