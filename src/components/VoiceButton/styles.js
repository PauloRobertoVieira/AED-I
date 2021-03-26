import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.Pressable`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    background-color: ${props => `${props.color}`};
    border: none;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: ${props => `${props.size}px`};
    color: ${props => `${props.color}`};
`;