import React, { useState } from 'react';
import { Center, Text, Button, VStack, FormControl, Input } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Mensagem } from '../../utils/Mensagem';

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
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BuscaTypes>({
    defaultValues: valoresIniciasBusca,
    resolver: yupResolver(schemaValidacaoBusca)
  });

  function onSubmit(values: BuscaTypes) {
    alert(values.busca);
  }

  return (
    <VStack space={1} alignItems="center" width="full" height="full" paddingX={5} paddingY={8}>
      <FormControl
        isRequired
        isInvalid={"busca" in errors}
        paddingY={2}
        paddingX={4}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
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
            />
          )}
          name="busca"
          rules={{ required: 'Campo vazio' }}
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          <Text fontSize="xl" color="red">{errors.busca?.message}</Text>
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        variant="solid"
        colorScheme="primary"
        size="lg"
        onPress={handleSubmit((onSubmit))}
      >
        <Text fontSize="xl" color="white">Entrar</Text>
      </Button>
    </VStack>
  );
}
