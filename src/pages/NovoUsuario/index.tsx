import React, { useState } from 'react';
import { Center, Text, Button, VStack, FormControl, Input, Select, CheckIcon } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CampoInputProps } from '../../components/CampoInput';
import { Mensagem } from '../../utils/Mensagem';
import { EMAIL_INVALIDO, MAXIMO_CARACTERES, MINIMO_CARACTERES, valor_maximo_carateres, valor_minimo_carateres } from '../../utils/constantes';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function NovoUsuario({ navigation }: NavigationProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ClienteTypes>({
    defaultValues: valoresIniciaisCliente,
    resolver: yupResolver(validacaoSchemaCliente)
  });

  function onSubmit(values: ClienteTypes) {
    // 
  }
  
  const lista_dados_campos: CampoInputProps[] = [
    {
      control: control, name: "nome", menssagem_erro: errors.nome?.message, placeholder: "Nome",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "nome" in errors,
    },
    {
      control: control, name: "email", menssagem_erro: errors.email?.message, placeholder: "Email",
      keyboardType: "email-address", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "email" in errors,
    },
    {
      control: control, name: "senha", menssagem_erro: errors.senha?.message, placeholder: "Senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "senha" in errors,
    },
    {
      control: control, name: "confirmacao_senha", menssagem_erro: errors.confirmacao_senha?.message, placeholder: "Confirme a senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "confirmacao_senha" in errors,
    },
    {
      control: control, name: "telefone", menssagem_erro: errors.telefone?.message, placeholder: "telefone",
      keyboardType: "phone-pad", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "telefone" in errors,
    },
    {
      control: control, name: "rua", menssagem_erro: errors.rua?.message, placeholder: "Rua",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "rua" in errors,
    },
    {
      control: control, name: "numero", menssagem_erro: errors.numero?.message, placeholder: "Numero",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "numero" in errors,
    },
    {
      control: control, name: "bairro", menssagem_erro: errors.bairro?.message, placeholder: "Bairro",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "bairro" in errors,
    },
    {
      control: control, name: "cep", menssagem_erro: errors.cep?.message, placeholder: "CEP",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "cep" in errors,
    },
    {
      control: control, name: "cidade", menssagem_erro: errors.cidade?.message, placeholder: "Cidade",
      keyboardType: "default", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "cidade" in errors,
    }
  ];

  return (
    <Center height="full" paddingX="5" paddingY="6">
      <Text fontSize="5xl" marginBottom="8">Novo usuario</Text>
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
        <FormControl
          isRequired
          isInvalid={'estado' in errors}
          paddingY={2}
          paddingX={4}
        >
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Estado"
                selectedValue={value}
                onValueChange={(itemValue: string) => { onChange(itemValue); }}
                variant="underlined"
                size="2xl"
                borderTopWidth={0}
                borderLeftWidth={0}
                borderRightWidth={0}
                rounded="none"
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />
                }}
              >
                <Select.Item label="Estado" value="" />
                {lista_estados_brasil.map((item, index) => {
                  const { texto, valor } = item;
                  
                  return (
                    <Select.Item key={index} label={texto} value={valor} />
                  );
                })}
              </Select>
            )}
            name="estado"
            rules={{ required: 'Selecione um item' }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            <Text fontSize="xl" color="red">{errors.estado?.message}</Text>
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      <VStack space={1} marginTop={10} alignItems="center" width="full">
        <Button
          width="full"
          variant="solid"
          colorScheme="primary"
          size="lg"
          onPress={handleSubmit((onSubmit))}
        >
          <Text fontSize="xl" color="white">Cadastrar</Text>
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
          onPress={() => navigation.navigate("Login")}
        >
          <Text fontSize="xl" color="white">Voltar</Text>
        </Button>
      </VStack>
    </Center>
  );
}

const validacaoSchemaCliente = Yup.object({
  nome: Yup
    .string()
    .required(Mensagem.MensagemErro("nome")),
  email: Yup
    .string()
    .email(Mensagem.MensagemSimples(EMAIL_INVALIDO))
    .required(Mensagem.MensagemErro("email")),
  senha: Yup
    .string()
    .required(Mensagem.MensagemErro("senha"))
    .min(valor_minimo_carateres, MINIMO_CARACTERES)
    .max(valor_maximo_carateres, MAXIMO_CARACTERES),
  confirmacao_senha: Yup.string().when("senha", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("senha")], "As senhas não são iguais!")
    }
  ).required(Mensagem.MensagemErro("confirme a senha")),
  rua: Yup.string().required(Mensagem.MensagemErro("rua")),
  numero: Yup.string().required(Mensagem.MensagemErro("numero")),
  bairro: Yup.string().required(Mensagem.MensagemErro("bairro")),
  cidade: Yup.string().required(Mensagem.MensagemErro("cidade")),
  estado: Yup.string().required(Mensagem.MensagemErro("estado")),
  cep: Yup.string().required(Mensagem.MensagemErro("cep")),
  telefone: Yup.string().required(Mensagem.MensagemErro("telefone")),
});

const valoresIniciaisCliente: ClienteTypes = {
  email: '', senha: '', nome: '', rua: '', numero: '',
  bairro: '', cidade: '', estado: '', cep: '', telefone: '',
  confirmacao_senha: "", id: "", data_cadastro: "", data_modificacao_cadastro: "",
  empresaId: ""
};

const lista_estados_brasil = [
  { valor: "AC", texto: "Acre" },
  { valor: "AL", texto: "Alagoas" },
  { valor: "AP", texto: "Amapá" },
  { valor: "AM", texto: "Amazonas" },
  { valor: "BA", texto: "Bahia" },
  { valor: "CE", texto: "Ceará" },
  { valor: "DF", texto: "Distrito Federal" },
  { valor: "ES", texto: "Espírito Santo" },
  { valor: "GO", texto: "Goiás" },
  { valor: "MA", texto: "Maranhão" },
  { valor: "MT", texto: "Mato Grosso" },
  { valor: "MS", texto: "Mato Grosso do Sul" },
  { valor: "MG", texto: "Minas Gerais" },
  { valor: "PA", texto: "Pará" },
  { valor: "PB", texto: "Paraíba" },
  { valor: "PR", texto: "Paraná" },
  { valor: "PE", texto: "Pernambuco" },
  { valor: "PI", texto: "Piauí" },
  { valor: "RJ", texto: "Rio de Janeiro" },
  { valor: "RN", texto: "Rio Grande do Norte" },
  { valor: "RS", texto: "Rio Grande do Sul" },
  { valor: "RO", texto: "Rondônia" },
  { valor: "RR", texto: "Roraima" },
  { valor: "SC", texto: "Santa Catarina" },
  { valor: "SP", texto: "São Paulo" },
  { valor: "SE", texto: "Sergipe" },
  { valor: "TO", texto: "Tocantins" }
];
