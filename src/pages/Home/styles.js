import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Brand = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Pressable`
  width: 70%;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  border: none;
  border-radius: 15px;
`;

export const Text = styled.Text`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => `${props.color}`};
`;
