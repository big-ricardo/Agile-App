import styled from 'styled-components/native'
import {Animated } from 'react-native'

export const Container = styled.SafeAreaView`
    background-color: ${props=> props.theme.primary};
    flex: 1;
`

export const FlatList = styled.FlatList`
  padding: 20px;
`

export const Header = styled(Animated.View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${props=>props.theme.textInverted};
    width: 250px
`

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px
`

export const Location = styled.View`
    background-color: ${props=>props.theme.tabColor};
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
`

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color:  ${props=>props.theme.textInverted}
`

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

export const LoadingIcon = styled.ActivityIndicator`
`
export const ListContainer = styled.View`
   margin-top: 20px;
`
