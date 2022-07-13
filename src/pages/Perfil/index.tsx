import React, { useEffect, useState, useContext } from 'react';
import { Text, Button, VStack, HStack } from "native-base";
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
    complemento: '', telefone: '', empresaId: '',
    data_cadastro: '', data_modificacao_cadastro: '',
  };

  const [data, setData] = useState<ClienteTypes>(dadosIniciais);

  useEffect(() => {
    let resultado_busca = login_data[0];
    setData(resultado_busca);

    // let resultado_busca = login_data.find((item) =>  item.id === String(dataUsuarioLogin.id));
    // let resultado_validado = (resultado_busca) ? resultado_busca : dadosIniciais;
    // setData(resultado_validado);

    // console.log(resultado_busca.cep.substring(0, 5));
    // console.log(resultado_busca.cep.substring(5, resultado_busca.cep.length));
    // console.log(resultado_busca.cep.substring(0, resultado_busca.cep.length-3));
    // console.log(resultado_busca.cep.substring(resultado_busca.cep.length-3, resultado_busca.cep.length));
  }, []);

  const { nome, email, senha, rua, numero, complemento, bairro, cidade, estado, cep, telefone, data_cadastro, data_modificacao_cadastro } = data;

  return (
    <VStack height="full" paddingX={5} paddingY={3} space={1} width="full">
      <ItemPerfil titulo="Nome:" valor={nome || "[nome]"} />
      <ItemPerfil titulo="E-mail:" valor={email || "[email]"} />
      <ItemPerfil titulo="Senha:" valor={Formatador.FormataExibicaoSenha(senha) || "[senha]"} />
      <ItemPerfil titulo="Rua:" valor={rua || "[rua]"} />
      <ItemPerfil titulo="Numero:" valor={numero || "[numero]"} />
      <ItemPerfil titulo="Complemento:" valor={complemento || "[complemento]"} />
      <ItemPerfil titulo="Bairro:" valor={bairro || "[bairro]"} />
      <ItemPerfil titulo="Cidade:" valor={cidade || "[cidade]"} />
      <ItemPerfil titulo="Estado:" valor={estado || "[estado]"} />
      <ItemPerfil titulo="CEP:" valor={Formatador.FormataCep(cep) || "[cep]"} />
      <ItemPerfil titulo="Telefone:" valor={Formatador.FormataTelefone(telefone) || "[telefone]"} />
      <ItemPerfil titulo="Cadastro:" valor={data_cadastro} />
      <ItemPerfil titulo="Modificação: " valor={data_modificacao_cadastro} />
    </VStack>
  );
}

interface ItemPerfilProps {
  titulo: string;
  valor: string;
}

function ItemPerfil(props: ItemPerfilProps) {
  const { titulo, valor } = props;

  return (
    <HStack
      alignItems="center"
      borderBottomWidth="1"
      borderBottomColor="gray.300"
      paddingBottom="2"
      paddingX="2"
      marginBottom="2"
    >
      <Text fontSize="xl" bold>{titulo}</Text>
      <Text fontSize="2xl" marginLeft={5} textAlign="justify">{valor}</Text>
    </HStack>
  );
}
