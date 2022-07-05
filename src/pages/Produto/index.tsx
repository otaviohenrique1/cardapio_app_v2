import React, { useEffect, useState } from 'react';
import { Center, Text, Button, VStack, Heading  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { lista_produtos } from '../HomePage/lista_produtos';
import { Formatador } from '../../utils/Formatador';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Produto">;
  route: RouteProp<RootStackParamList>
}

export default function Produto({ route, navigation }: NavigationProps) {
  const valores_iniciais: ProdutoCardapioType = {
    id: "",
    foto_miniatura: {
      id: "",
      nome: "",
      url: "",
    },
    nome: "",
    tipo: "",
    preco: 0,
    ativo: false,
    fotos_galeria: [],
    codigo: "",
    descricao: "",
    quantidade: 0,
    unidade_quantidade: "",
    ingredientes: [],
    ingredientes_removiveis: [],
    ingredientes_opcionais: [],
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    empresaId: "",
  };

  const [data, setData] = useState<ProdutoCardapioType>(valores_iniciais)
  const id = route.params?.id;

  useEffect(() => {
    let resultado = lista_produtos.find((item) => {
      console.log("item.id => ", item.id);
      console.log("id => ", id);
      console.log("item.id === id => ", item.id === id);
      return item.id === id;
    });
    setData((resultado) ? resultado : valores_iniciais);
  }, [])

  const { nome, preco, tipo, descricao } = data;

  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <VStack space={1} alignItems="center" width="full">
        <Heading size="4xl">{nome}</Heading>
        <Text fontSize="2xl">{Formatador.FormataValorMonetario
        (Number(preco))}</Text>
        <Text fontSize="2xl">{`ID => ${id}`}</Text>
        <Text fontSize="2xl">{tipo}</Text>
        <Text fontSize="2xl">{descricao}</Text>
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          size="lg"
        >
          <Text fontSize="xl" color="white">Comprar</Text>
        </Button>
      </VStack>
    </Center>
  );
}
