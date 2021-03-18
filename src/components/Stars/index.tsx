import React from 'react';
import { View } from 'react-native';

import { Container, StarView, StarText } from './styles';

import StarFull from '../../assets/star.svg'
import StarHalf from '../../assets/star_half.svg'
import StarEmpty from '../../assets/star_empty.svg'

const Stars = ({ stars, showNumber }) => {

    let s = [0, 0, 0, 0, 0]
    let floor = Math.floor(stars)
    let left = stars - floor

    for (var i = 0; i < floor; i++) {
        s[i] = 2
    }
    if(left > 0){
        s[i] = 1
    }

    return (
        <Container>
            {s.map((i, k) => (
                <StarView key={k}>
                    {i === 0 && <StarEmpty width='18' height='18' fill='#ff9200' />}
                    {i === 1 && <StarHalf width='18' height='18' fill='#ff9200' />}
                    {i === 2 && <StarFull width='18' height='18' fill='#ff9200' />}
                </StarView>

            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </Container>
    );
}

export default Stars;