import React, {useContext} from 'react';

import {ThemeContext} from 'styled-components/native'

import { Container, Input } from './styles';

const InputComponent = ({ Icon, ...props }) => {
    const theme = useContext(ThemeContext)

    return (
        <Container>
            <Icon width='24' height='24' fill={theme.primary}/>
            <Input {...props} />
        </Container>
    );
}

export default InputComponent;