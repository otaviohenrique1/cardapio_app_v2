import React, { useState } from 'react';
import { Center, Text, Button, VStack, FormControl, Input } from "native-base";
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
  const [data, setData] = useState<string>("")
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ClienteTypes>({
    defaultValues: valoresIniciaisCliente,
    resolver: yupResolver(validacaoSchemaCliente)
  });

  function onSubmit(values: ClienteTypes) {
    setData(values.nome);
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
    }
  ];

  return (
    <Center height="full" paddingX="5" paddingY="6">
      <Text fontSize="5xl" marginBottom="8">Novo usuario</Text>
      <Text fontSize="5xl" marginBottom="4">{data}</Text>
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
                <Text fontSize={20} color="red">{menssagem_erro}</Text>
              </FormControl.ErrorMessage>
            </FormControl>
          );
        })}
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
