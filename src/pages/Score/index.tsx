import React from 'react';
import { useNavigation } from '@react-navigation/native';



import { ImageBackground, Container, BrandTitulo, TextTitulo, BrandNome, TextNome, BrandPontos, TextPontos } from './styles';

const fundo = '../../assets/fundo.png';

export default function Score() {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageBackground
      source={require(fundo)}
      >

        <BrandTitulo>
          <TextTitulo>
            RANKING LIST
        </TextTitulo>
        </BrandTitulo>

        <BrandNome>
          <TextNome>
            Nome:
        </TextNome>
        </BrandNome>

        <BrandPontos>
          <TextPontos>
            Pontos:
        </TextPontos>
        </BrandPontos>

      </ImageBackground>
    </Container>
  );
}