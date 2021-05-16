import styled from 'styled-components/native';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

export const Container = styled.View`
  width: 95%;
  height: 60px;
  align-items: center;
  position: relative;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px black solid;
  border-radius: 5px;
  font-family: ${fonts.text};
  text-align-vertical: center;
  padding-horizontal: 15px;
  letter-spacing: 2px;
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => `${props.color}`};
`;

export const SubmitButton = styled.Pressable`
  height: 75%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 0 5px;
  background-color: red;
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-24.5px);
`;

export const Image = styled.Image`
  width: 32px;
  height: 32px;
  tint-color: ${colors.microfone};
`;
