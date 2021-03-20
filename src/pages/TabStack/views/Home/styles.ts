import styled from 'styled-components/native'
import {Animated } from 'react-native'

export const Container = styled.SafeAreaView`
    background-color: ${props=> props.theme.backgroundColor};
    flex: 1;
`

export const FlatList = styled.FlatList`
  min-height: 300px;
`

export const HeaderContainer = styled.View`
  padding: 30px 20px 50px 20px;
  background-color: ${props=> props.theme.backgroundColor};
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${props=>props.theme.tabColor};
    width: 250px;
    margin-bottom: 20px;
`

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`

export const Location = styled.View`
    background-color: ${props=>props.theme.second};
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color:  ${props=>props.theme.tabColor};
`

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

export const LoadingIcon = styled.ActivityIndicator`
`
export const ListContainer = styled(Animated.View)`
  padding: 20px;
  padding-top: 30px;
  background-color:  ${props=>props.theme.textInverted};
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  min-height: 300px;
`
