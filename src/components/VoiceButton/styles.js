import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Pressable`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => `${props.color}`};
  border: none;
  border-radius: 15px;
`;

export const Image = styled.Image`
  width: 75px;
  height: 90px;
  resize-mode: stretch;
  tint-color: ${colors.microfone};
`;
