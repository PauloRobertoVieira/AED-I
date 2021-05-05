import styled from 'styled-components/native';
import fonts from '../../../public/styles/fonts';

export const Container = styled.View`
  width: 95%;
  height: 50px;
  align-items: center;
  position: relative;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px black solid;
  border-radius: 5px;
  font-family: ${fonts.text};
  text-align-vertical: auto;
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
  transform: translateY(-19px);
`;

export const Text = styled.Text`
  font-family: ${fonts.text};
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => `${props.color}`};
`;
