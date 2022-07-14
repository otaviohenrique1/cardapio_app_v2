import React, { useState } from 'react';
import { Center, Text, Button, VStack, FormControl, Input, HStack, IconButton, Icon, FlatList, Pressable, Box, Avatar, Spacer } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Mensagem } from '../../utils/Mensagem';
import { MaterialIcons } from "@expo/vector-icons";
import { lista_produtos } from '../HomePage/lista_produtos';
import { Formatador } from '../../utils/Formatador';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';
import ListaProdutos from '../../components/Listas/ListaProdutos';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface BuscaTypes {
  busca: string;
}

const valoresIniciasBusca: BuscaTypes = {
  busca: '',
};

const schemaValidacaoBusca = Yup
  .object()
  .shape({
    busca: Yup
      .string()
      .required(Mensagem.MensagemErro("busca"))
  });

export default function Busca({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BuscaTypes>({
    defaultValues: valoresIniciasBusca,
    resolver: yupResolver(schemaValidacaoBusca)
  });

  function onSubmit(values: BuscaTypes) {
    let termo_busca =  values.busca;
    let resultado_busca = lista_produtos.filter((item) => item.nome === termo_busca);
    setData(resultado_busca);
  }

  return (
    <VStack space={1} alignItems="center" width="full" height="full" paddingX={5} paddingY={8}>
      <FormControl
        isRequired
        isInvalid={"busca" in errors}
        width="full"
        paddingX={5}
        marginBottom="10"
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <HStack width="full">
              <Input
                onBlur={onBlur}
                placeholder="Busca"
                onChangeText={(val) => onChange(val)}
                value={value}
                variant="underlined"
                size="2xl"
                secureTextEntry={false}
                editable={true}
                keyboardType="default"
                width="85%"
              />
              <IconButton
                icon={<Icon as={MaterialIcons} name="search" size="3xl" color="white" />}
                colorScheme="violet"
                variant="solid"
                onPress={handleSubmit((onSubmit))}
              />
            </HStack>
          )}
          name="busca"
          rules={{ required: 'Campo vazio' }}
          defaultValue=""
        />
        <FormControl.ErrorMessage justifyContent="center">
          <Text
            fontSize="xl"
            color="red"
            textAlign="center"
          >{errors.busca?.message}</Text>
        </FormControl.ErrorMessage>
      </FormControl>
      {(data.length !== 0) ? (
        <ListaProdutos
          data={data}
          navigation={navigation}
        />
      ) : (
        <ItemListaVazia />
      )}
    </VStack>
  );
}
