import React, { useEffect, useState, useContext } from 'react';
import { Center, Text, Button, VStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login_data } from '../Login/login_data';
import { Formatador } from '../../utils/Formatador';
import { UsuarioContext } from '../../context/usuario';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Perfil({ navigation }: NavigationProps) {
  const { dataUsuarioLogin } = useContext(UsuarioContext);

  const dadosIniciais: ClienteTypes = {
    id: '', nome: '', email: '', senha: '',
    confirmacao_senha: '', rua: '', numero: '',
    bairro: '', cidade: '', estado: '', cep: '',
    telefone: '', empresaId: '', data_cadastro: '',
    data_modificacao_cadastro: '',
  };

  const [data, setData] = useState<ClienteTypes>(dadosIniciais);

  useEffect(() => {
    // let resultado_busca = login_data[0];
    let resultado_busca = login_data.find((item) =>  item.id === String(dataUsuarioLogin.id));

    let resultado_validado = (resultado_busca) ? resultado_busca : dadosIniciais;

    const { id, nome, email, senha, confirmacao_senha, rua, numero, bairro, cidade, estado, cep, telefone, data_cadastro, data_modificacao_cadastro, empresaId } = resultado_validado;
    
    let resultado_formatado: ClienteTypes = {
      id: (id !== '') ? id : "id",
      nome: (nome !== '') ? nome : "nome",
      email: (email !== '') ? email : "email",
      senha: (senha !== '') ? Formatador.FormataExibicaoSenha(senha) : "**********",
      confirmacao_senha: (confirmacao_senha !== '') ? Formatador.FormataExibicaoSenha(confirmacao_senha) : "**********",
      rua: (rua !== '') ? rua : "rua",
      numero: (numero !== '') ? numero : "numero",
      bairro: (bairro !== '') ? bairro : "bairro",
      cidade: (cidade !== '') ? cidade : "cidade",
      estado: (estado !== '') ? estado : "estado",
      cep: (cep !== '') ? Formatador.FormataCep(cep) : "cep",
      telefone: (telefone !== '') ? Formatador.FormataTelefone(telefone) : "telefone",
      data_cadastro: (data_cadastro !== '') ? Formatador.FormatadorDataHora(data_cadastro, "dd/MM/yyyy HH:mm:ss") : "##/##/####",
      data_modificacao_cadastro: (data_modificacao_cadastro !== '') ? Formatador.FormatadorDataHora(data_modificacao_cadastro, "dd/MM/yyyy HH:mm:ss") : "##/##/####",
      empresaId: (empresaId !== '') ? empresaId : "empresaId",
    };
    setData(resultado_validado);
  }, [])
  
  const { nome, email, senha, rua, numero, bairro, cidade, estado, cep, telefone, data_cadastro, data_modificacao_cadastro } = data;

  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <VStack space={1} alignItems="center" width="full">
        <Text fontSize="4xl">{nome}</Text>
        <Text fontSize="2xl">{email}</Text>
        <Text fontSize="2xl">{senha}</Text>
        <Text fontSize="2xl">{rua}</Text>
        <Text fontSize="2xl">{numero}</Text>
        <Text fontSize="2xl">{bairro}</Text>
        <Text fontSize="2xl">{cidade}</Text>
        <Text fontSize="2xl">{estado}</Text>
        <Text fontSize="2xl">{cep}</Text>
        <Text fontSize="2xl">{telefone}</Text>
        <Text fontSize="2xl">{data_cadastro}</Text>
        <Text fontSize="2xl">{data_modificacao_cadastro}</Text>
      </VStack>
    </Center>
  );
}
