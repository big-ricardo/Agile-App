import styled from 'styled-components/native'

export const TabArea = styled.View`
    height: 60px;
    background-color: ${props=> props.theme.second};
    flex-direction: row;
`

export const TabItem = styled.TouchableOpacity`
   flex:1;
   justify-content: center;
   align-items: center;
`

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.theme.textInverted};
  border-radius: 35px;
  border: 3px solid  ${props=> props.theme.second};
  margin-top: -20px;
`
