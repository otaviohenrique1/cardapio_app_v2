import React from 'react';
import { Center, Text, Button, VStack, Input, FormControl } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CampoInput, { CampoInputProps } from '../../components/CampoInput';
import { valoresIniciaisLogin } from '../../utils/constantes';
import { schemaValidacaoFormularioLogin } from '../../utils/ValidacaoSchemas';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Login({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<LoginTypes>({
    defaultValues: valoresIniciaisLogin,
    resolver: yupResolver(schemaValidacaoFormularioLogin)
  });

  function onSubmit(values: LoginTypes) {
    navigation.navigate("HomePage")
  }

  const lista_dados_campos: CampoInputProps[] = [
    {
      control: control, name: "email", menssagem_erro: errors.email?.message, placeholder: "Email",
      keyboardType: "email-address", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "email" in errors,
    },
    {
      control: control, name: "senha", menssagem_erro: errors.senha?.message, placeholder: "Senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "senha" in errors,
    },
  ];

  return (
    <Center height="full" paddingX="5" paddingY="6">
      <Text fontSize="5xl" marginBottom="8">Login</Text>
      <VStack space={1} alignItems="center" width="full">
        {lista_dados_campos.map((item, index) => {
          const { control, name, isInvalid, placeholder, keyboardType, secureTextEntry,
            editable, menssagem_erro, defaultValue } = item;
          return (
            <FormControl
              key={index}
              isRequired
              isInvalid={isInvalid}
              paddingY={2}
              paddingX={4}
            >
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder={placeholder}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                    variant="underlined"
                    size="2xl"
                    secureTextEntry={secureTextEntry}
                    editable={editable}
                    keyboardType={keyboardType}
                  />
                )}
                name={name}
                rules={{ required: 'Campo vazio' }}
                defaultValue={defaultValue}
              />
              <FormControl.ErrorMessage>
                <Text fontSize="xl" color="red">{menssagem_erro}</Text>
              </FormControl.ErrorMessage>
            </FormControl>
          );
        })}
      </VStack>
      <VStack space={1} alignItems="center" width="full" marginTop={10}>
        <Button
          width="full"
          variant="solid"
          colorScheme="primary"
          size="lg"
          onPress={handleSubmit((onSubmit))}
        >
          <Text fontSize="xl" color="white">Entrar</Text>
        </Button>
        <Button
          width="full"
          variant="solid"
          colorScheme="danger"
          size="lg"
          onPress={() => reset()}
        >
          <Text fontSize="xl" color="white">Limpar</Text>
        </Button>
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          size="lg"
          onPress={() => navigation.navigate("NovoUsuario")}
        >
          <Text fontSize="xl" color="white">Novo Cadastro</Text>
        </Button>
      </VStack>
    </Center>
  );
}
