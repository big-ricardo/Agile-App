import styled from 'styled-components/native';

export const Modal = styled.Modal`
  
`;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,.5);
  justify-content: flex-end;
`;

export const Body = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const Item = styled.View`
    background-color: ${props => props.theme.textInverted};
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

export const User = {
    Container: styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `,

    Avatar: styled.Image`
        width: 56px;
        height: 56px;
        border-radius: 20px;
        margin-right: 15px;
    `,

    Name: styled.Text`
        color: ${props => props.theme.text};
        font-size:18px;
        font-weight: bold;
    `,
}

export const Service = {
    Container: styled.View`
        flex-direction: row;
        justify-content: space-around;
    `,

    Name: styled.Text`
        color: ${props => props.theme.text};
        font-size:16px;
        font-weight: bold;
    `,

    Price: styled.Text`
        font-size:16px;
        font-weight: bold;
        color: ${props => props.theme.text};
    `,
}

export const FinishButton = styled.TouchableOpacity`
    height: 60px;
    background-color: ${props => props.theme.primary};
    justify-content: center;
    align-items: center;
    border-radius:20px;
`;

export const FinishButtonText = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: ${props => props.theme.textInverted};
`;

export const DateInfo = {
    Container: styled.View`
        flex-direction: row;
    `,

    Prev: styled.TouchableOpacity`
        flex: 1;
        align-items: flex-end;
        justify-content: center;
    `,

    Title: styled.Text`
        width: 140px;
        text-align: center;
        font-weight: bold;
        font-size: 17px;
        color: ${props => props.theme.secondText}
    `,

    Next: styled.TouchableOpacity`
        flex: 1;
        align-items: flex-start;
        justify-content: center;
    `,

    List: styled.ScrollView``,

    Item: styled.TouchableOpacity`
        width: 45px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    `,

    Weekday: styled.Text`
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.text}
    `,

    Number: styled.Text`
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.text}
    `,

    Loading: styled.Text`
        flex: 1;
        height: 43px;
        text-align: center;
        margin-top: 15px;
        justify-content: flex-start;
        align-items: center;
    `,

};

export const Hours = {
    List: styled.ScrollView``,

    Item: styled.TouchableOpacity`
        width: 75px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    `,

    Text: styled.Text`
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.text}
    `,

    Loading: styled.Text`
        flex: 1;
        text-align: center;
        justify-content: flex-start;
        align-items: center;
    `
};

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;


