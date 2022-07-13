import React, { useEffect, useState } from 'react';
import { Center, Text, Button, VStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login_data } from '../Login/login_data';
import { Formatador } from '../../utils/Formatador';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Perfil({ navigation }: NavigationProps) {
  const dadosIniciais: ClienteTypes = {
    email: '',
    senha: '',
    confirmacao_senha: '',
    nome: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    id: '',
    data_cadastro: '',
    data_modificacao_cadastro: '',
    empresaId: ''
  };

  const [data, setData] = useState<ClienteTypes>(dadosIniciais);

  useEffect(() => {
    setData(login_data[0]);
  }, [])
  
  const { nome, email, senha, rua, numero, bairro, cidade, estado, cep, telefone, data_cadastro, data_modificacao_cadastro } = data;

  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <VStack space={1} alignItems="center" width="full">
        <Text fontSize="4xl">{nome}</Text>
        <Text fontSize="2xl">{email}</Text>
        <Text fontSize="2xl">{Formatador.FormataExibicaoSenha(senha)}</Text>
        <Text fontSize="2xl">{rua}</Text>
        <Text fontSize="2xl">{numero}</Text>
        <Text fontSize="2xl">{bairro}</Text>
        <Text fontSize="2xl">{cidade}</Text>
        <Text fontSize="2xl">{estado}</Text>
        <Text fontSize="2xl">{Formatador.FormataCep(cep)}</Text>
        <Text fontSize="2xl">{Formatador.FormataTelefone(telefone)}</Text>
        <Text fontSize="2xl">{Formatador.FormatadorDataHora(data_cadastro, "dd/MM/yyyy HH:mm:ss")}</Text>
        <Text fontSize="2xl">{Formatador.FormatadorDataHora(data_modificacao_cadastro, "dd/MM/yyyy HH:mm:ss")}</Text>
      </VStack>
    </Center>
  );
}
