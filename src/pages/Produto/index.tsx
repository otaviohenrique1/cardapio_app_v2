import React, { useEffect, useState } from 'react';
import { Center, Text, Button, VStack, Avatar, FlatList, HStack, Spacer, Box, Image, Pressable, Checkbox } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { lista_produtos } from '../HomePage/lista_produtos';
import { Formatador } from '../../utils/Formatador';
import { Control, Controller } from 'react-hook-form';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Produto">;
  route: RouteProp<RootStackParamList>
}

interface IngredientesListaTypes {
  id: number | string;
  nome: string;
  quantidade: string;
}

interface ingredientesRemoviveisOpcionaisTypes extends IngredientesListaTypes {
  preco: string;
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

  const [data, setData] = useState<ProdutoCardapioType>(valores_iniciais);
  const [ingredientesListaData, setIngredientesListaData] = useState<IngredientesListaTypes[]>([]);
  const [ingredientesRemoviveisData, setIngredientesRemoviveisData] = useState<ingredientesRemoviveisOpcionaisTypes[]>([]);
  const [ingredientesOpcionaisData, setIngredientesOpcionaisData] = useState<ingredientesRemoviveisOpcionaisTypes[]>([]);
  const id = route.params?.id;

  useEffect(() => {
    let id_item = (id) ? id : "";
    let resultado_filtro_item = lista_produtos.filter((item) => Number(item.id) === Number(id_item));
    let resultado = (resultado_filtro_item) ? resultado_filtro_item[0] : valores_iniciais;

    let produto1 = lista_produtos[0];

    let ingredientesLista = produto1.ingredientes.map((item) => {
      const { id, nome, quantidade, quantidade_unidade } = item;
      const quantidade_formatada = `${quantidade} ${quantidade_unidade}`;
      return { id, nome, quantidade: quantidade_formatada };
    });

    let ingredientesRemoviveisLista = produto1.ingredientes_removiveis
      .filter((item) => item.removivel === true)
      .map((item) => {
        const { id, nome, quantidade, quantidade_unidade, preco } = item;
        const quantidade_formatada = `${quantidade} ${quantidade_unidade}`;
        const precoFormatado = Formatador.FormataValorMonetario(preco);
        return { id, nome, quantidade: quantidade_formatada, preco: precoFormatado };
      });

    let ingredientesOpcionaisLista = produto1.ingredientes_opcionais
      .filter((item) => item.opcional === true)
      .map((item) => {
        const { id, nome, quantidade, quantidade_unidade, preco } = item;
        const quantidade_formatada = `${quantidade} ${quantidade_unidade}`;
        const precoFormatado = Formatador.FormataValorMonetario(preco);
        return { id, nome, quantidade: quantidade_formatada, preco: precoFormatado };
      });

    setData(produto1);
    setIngredientesListaData(ingredientesLista);
    setIngredientesRemoviveisData(ingredientesRemoviveisLista);
    setIngredientesOpcionaisData(ingredientesOpcionaisLista);
  }, [])

  const { foto_miniatura, nome, tipo, preco, fotos_galeria, descricao, ingredientes, ingredientes_removiveis, ingredientes_opcionais, empresaId } = data;
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
      <ListaIngredientes
        titulo="Ingredientes"
        lista={ingredientesListaData}
      />
      <GaleriaFotos
        titulo="Galeria"
        galeria_fotos={fotos_galeria}
      />
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
                <Checkbox value='opcional'>
                  <HStack
                    space={3}
                    justifyContent="space-between"
                    alignItems="center"
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
                </Checkbox>
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
                <Checkbox value='removivel'>
                  <HStack
                    space={3}
                    justifyContent="space-between"
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

interface GaleriaFotosProps {
  titulo: string;
  galeria_fotos: FotoTypes[];
}

function GaleriaFotos(props: GaleriaFotosProps) {
  const { titulo, galeria_fotos } = props;

  return (
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
      <Text fontSize="2xl" textAlign="center" bold>{titulo}</Text>
      <Center>
        <FlatList
          data={galeria_fotos}
          renderItem={(item) => {
            const { nome, url } = item.item;
            return (
              <Pressable
                marginX={1}
                borderWidth={1}
                borderColor="gray.400"
                onPress={() => {
                  alert(nome)
                }}
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
  );
}

interface ListaIngredientesProps {
  titulo: string;
  lista: IngredientesListaTypes[];
}

function ListaIngredientes(props: ListaIngredientesProps) {
  const { titulo, lista } = props;

  return (
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
      <Text fontSize="2xl" textAlign="center" bold>{titulo}</Text>
      <Center>
        <FlatList
          data={lista}
          renderItem={(item) => {
            const { id, nome, quantidade } = item.item;
            return (
              <HStack space={3} key={id}>
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
                >{quantidade}</Text>
              </HStack>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </Center>
    </VStack>
  );
}

interface ListaCheckboxProps {
  control: Control<any, any>;
  titulo_lista: string;
  lista_ingredientes: IngredientesTypes[];
  exibe_preco: boolean;
}

function ListaCheckbox(props: ListaCheckboxProps) {
  const { control, titulo_lista, lista_ingredientes, exibe_preco } = props;

  return (
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
      <Text fontSize="2xl" textAlign="center" bold>{titulo_lista}</Text>
      <Center>
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Checkbox.Group
              onChange={(val) => onChange(val)}
              flexDirection="column"
            >
              {lista_ingredientes.map((item, index) => {
                const { nome, quantidade, quantidade_unidade, preco } = item;
                return (
                  <Checkbox value={nome} key={index}>
                    <HStack
                      space={3}
                      justifyContent="space-between"
                      alignItems="center"
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
                      {(exibe_preco) ? (
                        <>
                          <Spacer />
                          <Text
                            fontSize="xl"
                            _dark={{ color: "warmGray.50" }}
                            color="coolGray.800"
                            alignSelf="flex-start"
                          >{Formatador.FormataValorMonetario(Number(preco))}</Text>
                        </>
                      ) : null}
                    </HStack>
                  </Checkbox>
                );
              })}
            </Checkbox.Group>
          )}
          name="hobbies"
          defaultValue=""
        />
      </Center>
    </VStack>
  );
}

interface ListaCheckbox2Props {
  titulo_lista: string;
  lista_ingredientes: IngredientesTypes[];
  checkbox_value: string;
}

function ListaCheckbox2(props: ListaCheckbox2Props) {
  const { titulo_lista, lista_ingredientes, checkbox_value } = props;

  return (
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
      <Text fontSize="2xl" textAlign="center" bold>{titulo_lista}</Text>
      <Center>
        <FlatList
          data={lista_ingredientes}
          renderItem={(item) => {
            const { id, nome, quantidade, quantidade_unidade, preco, removivel } = item.item;
            return (
              <Checkbox value={checkbox_value}>
                <HStack
                  space={3}
                  justifyContent="space-between"
                  alignItems="center"
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
              </Checkbox>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </Center>
    </VStack>
  )
}