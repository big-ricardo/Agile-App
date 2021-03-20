import styled from 'styled-components/native'
import {Animated } from 'react-native'

export const Container = styled.SafeAreaView`
    background-color: ${props=> props.theme.primary};
    flex: 1;
`

export const FlatList = styled.FlatList`
`

export const HeaderContainer = styled.View`
`
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`

export const Search = styled.View`
    background-color: ${props=>props.theme.primary};
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
`

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color:  ${props=>props.theme.textInverted};
`

export const SearchFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

export const LoadingIcon = styled.ActivityIndicator`
`
export const ListContainer = styled(Animated.View)`
  padding: 30px 20px 0px 20px;
  background-color:  ${props=>props.theme.textInverted};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  min-height: 300px;
  margin-top: 40px;
`
