import React, { useEffect, useState } from 'react';
import { Center, Text, Button, VStack, Avatar, FlatList, HStack, Spacer, Box, Image, Pressable, Checkbox } from "native-base";
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
    // let resultado = lista_produtos.find((item) => {
    //   console.log("item.id => ", item.id);
    //   console.log("id => ", id);
    //   console.log("item.id === id => ", item.id === id);
    //   return item.id === id;
    // });
    // setData((resultado) ? resultado : valores_iniciais);
    let id_item = (id) ? id : 1;
    let resultado_filtro_item = lista_produtos.filter((item) => Number(item.id) === Number(id_item));
    let resultado = (resultado_filtro_item) ? resultado_filtro_item[0] : valores_iniciais;
    // setData(resultado);
    let produto1 = lista_produtos[0];
    setData(produto1);
  }, [])

  const { foto_miniatura, nome, tipo, preco, ativo, fotos_galeria, codigo, descricao, quantidade, unidade_quantidade, ingredientes, ingredientes_removiveis, ingredientes_opcionais, data_cadastro, data_modificacao_cadastro, empresaId } = data;
  const { url: url_avatar } = foto_miniatura;

  return (
    <VStack
      space={1}
      alignItems="center"
      width="full"
      height="full"
      paddingX={5}
      paddingY={8}
    >
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        alignItems="center"
        space={5}
      >
        <Text fontSize="4xl">{nome}</Text>
        <Avatar size="48px" source={{ uri: url_avatar }} />
      </VStack>
      <Box
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="row"
        width="full"
        justifyContent="space-between"
        alignItems="center"
        paddingY={2}
      >
        <Text fontSize="2xl" bold>{`Preço($)`}</Text>
        <Text fontSize="xl"
        >{Formatador.FormataValorMonetario(Number(preco))}</Text>
      </Box>
      <Box
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="row"
        width="full"
        justifyContent="space-between"
        alignItems="center"
        paddingY={2}
      >
        <Text fontSize="2xl" bold>Tipo</Text>
        <Text fontSize="xl">{tipo}</Text>
      </Box>
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        paddingY={5}
        space={3}
      >
        <Text fontSize="2xl" textAlign="center" bold>Descrição</Text>
        <Text fontSize="xl" textAlign="justify">{descricao}</Text>
      </VStack>
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        space={3}
        paddingY={5}
      >
        <Text fontSize="2xl" textAlign="center" bold>Ingredientes</Text>
        <Center>
          <FlatList
            data={ingredientes}
            renderItem={(item) => {
              const { id, nome, quantidade, quantidade_unidade } = item.item;
              return (
                <HStack
                  space={3}
                  justifyContent="space-between"
                  key={id}
                >
                  <Text
                    fontSize="xl"
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800" bold
                    alignSelf="flex-start"
                  >{nome}</Text>
                  <Spacer />
                  <Text
                    fontSize="xl"
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >{`${quantidade} ${quantidade_unidade}`}</Text>
                </HStack>
              );
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </Center>
      </VStack>
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        space={3}
        paddingY={5}
      >
        <Text fontSize="2xl" textAlign="center" bold>Galeria</Text>
        <Center>
          <FlatList
            data={fotos_galeria}
            renderItem={(item) => {
              const { nome, url } = item.item;
              return (
                <Pressable
                  marginX={1}
                  borderWidth={1}
                  borderColor="gray.400"
                >
                  <Image
                    source={{ uri: url }}
                    alt={nome}
                    size="xl"
                  />
                </Pressable>
              );
            }}
            keyExtractor={(item) => String(item.id)}
            horizontal
          />
        </Center>
      </VStack>
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        space={3}
        paddingY={5}
      >
        <Text fontSize="2xl" textAlign="center" bold>Opcionais</Text>
        <Center>
          <FlatList
            data={ingredientes_opcionais}
            renderItem={(item) => {
              const { id, nome, quantidade, quantidade_unidade } = item.item;
              return (
                <HStack
                  space={3}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Checkbox value='opcional' />
                  <Text
                    fontSize="xl"
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800" bold
                    alignSelf="flex-start"
                  >{nome}</Text>
                  <Spacer />
                  <Text
                    fontSize="xl"
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >{`${quantidade} ${quantidade_unidade}`}</Text>
                </HStack>
              );
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </Center>
      </VStack>
      <VStack
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        flexDirection="column"
        width="full"
        justifyContent="center"
        space={3}
        paddingY={5}
      >
        <Text fontSize="2xl" textAlign="center" bold>Removiveis</Text>
        <Center>
          <FlatList
            data={ingredientes_removiveis}
            renderItem={(item) => {
              const { nome, quantidade, quantidade_unidade } = item.item;
              return (
                <Checkbox
                  value='removivel'
                  >
                  <HStack
                    space={3}
                    justifyContent="space-between"
                    width="full"
                  >
                    <Text
                      fontSize="xl"
                      _dark={{ color: "warmGray.50" }}
                      color="coolGray.800" bold
                      // alignSelf="flex-start"
                    >{nome}</Text>
                    <Spacer />
                    <Text
                      fontSize="xl"
                      _dark={{ color: "warmGray.50" }}
                      color="coolGray.800"
                      // alignSelf="flex-start"
                    >{`${quantidade} ${quantidade_unidade}`}</Text>
                  </HStack>
                </Checkbox>
              );
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </Center>
      </VStack>
      <Button
        width="full"
        variant="solid"
        colorScheme="emerald"
        size="lg"
        marginTop="10"
      >
        <Text fontSize="xl" color="white">Comprar</Text>
      </Button>
    </VStack>
  );
}
