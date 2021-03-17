import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.textInverted};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

const SwiperDot = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.textInverted};
    margin: 3px;
`;

export const MySwiper = {
    Fake: styled.View`
        height:240px;
        background-color: ${props => props.theme.backgroundColor};
    `,

    Img: styled.Image`
        width: 100%;
        height: 240px;
    `,

    Item: styled.View`
        flex: 1;
        background-color: ${props => props.theme.backgroundColor};
    `,

    Dot: SwiperDot,

    DotActive: styled(SwiperDot)`
        background-color: ${props => props.theme.primary};
    `,

}

export const Body = styled.View`
   background-color: ${props => props.theme.textInverted};
   border-top-left-radius: 50px;
   margin-top: -50px;
`;

export const User = {
    Container: styled.View`
        flex-direction: row;
        margin-top: -35px;
    `,

    Info: styled.View`
        flex-direction: column;
        flex: 1;
        justify-content: flex-end;
    `,

    Name: styled.Text`
        color: ${props => props.theme.text};
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
    `,

    Avatar: styled.Image`
        width: 110px;
        height: 110px;
        border-radius: 20px;
        margin-left: 30px;
        margin-right: 20px;
        border-width: 4px;
        border-color: ${props => props.theme.textInverted};
    `,
}

export const UserFavBotton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color:  ${props => props.theme.textInverted};
  border: 2px solid #f5f5f5;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 10px;
`;

export const Services = {

    Container: styled.View`
        margin-top: 40px;
    `,

    Item: styled.View`
        flex-direction: row;
        margin-left: 30px;
        margin-right: 25px;
        margin-bottom: 20px;
    `,

    Title: styled.Text`
         color:${props => props.theme.primary};
         font-size: 20px;
         font-weight: bold;
         margin-left: 30px;
        margin-bottom: 20px;
    `,

    Info: styled.View`
        flex: 1;
    `,

    Name: styled.Text`
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.primary};
    `,

    Price: styled.Text`
        font-size: 14px;
        color: ${props => props.theme.primary};
    `,

    Buttom: styled.TouchableOpacity`
        background-color:${props => props.theme.primary};
        border-radius: 10px;
        padding: 10px 15px; 
    `,

    ButtomText: styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.theme.textInverted};
    `,

}




export const Depositions = {
    Container: styled.View`
        margin-top:30px;
        margin-bottom: 40px;
    `,

    Item: styled.View`
        background-color: ${props=>props.theme.tabColor};
        padding: 15px;
        border-radius: 15px;
        height: 110px;
        justify-content: center;
        margin-left: 50px;
        margin-right: 50px;
    `,

    Info: styled.View`
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5px;
    `,

    Name: styled.Text`
        color: ${props=>props.theme.textInverted};
        font-size: 14px;
        font-weight: bold;
    `,

    Body: styled.Text`
         color: ${props=>props.theme.textInverted};
        font-size: 13px;
    `,
}

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;


export const BackBotton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 15;
`;
