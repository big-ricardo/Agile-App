import styled from 'styled-components/native'
import {Animated } from 'react-native'

export const Container = styled.SafeAreaView`
    background-color: ${props=> props.theme.primary};
    flex: 1;
`
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px
`
export const FlatList = styled.FlatList`

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
    width: 230px
`

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px
`

export const Location = styled.View`
    background-color: ${props=>props.theme.primary};
    border: 2px solid  ${props=>props.theme.tabColor};
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
   margin-top: 50px
`
export const ListContainer = styled.View`
   margin-top: 10px;
   margin-bottom: 20px;
`
