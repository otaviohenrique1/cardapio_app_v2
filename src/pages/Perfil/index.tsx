import React, { useEffect, useState, useContext } from 'react';
import { Text, Button, VStack, HStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login_data } from '../Login/login_data';
import { Formatador } from '../../utils/Formatador';
import { UsuarioContext } from '../../context/usuario';
import { RouteProp } from '@react-navigation/native';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Perfil">;
  route: RouteProp<RootStackParamList>
}

export default function Perfil({ route, navigation }: NavigationProps) {
  const { dataUsuarioLogin } = useContext(UsuarioContext);

  const dadosIniciais: ClienteTypes = {
    id: '', nome: '', email: '', senha: '',
    confirmacao_senha: '', rua: '', numero: '',
    bairro: '', cidade: '', estado: '', cep: '',
    complemento: '', telefone: '', empresaId: '',
    data_cadastro: '', data_modificacao_cadastro: '',
  };

  const [data, setData] = useState<ClienteTypes>(dadosIniciais);
    const id = route.params?.id;

  useEffect(() => {
    let id_usuario = (id) ? id : "";
    // let id = dataUsuarioLogin.id;
    console.log(id_usuario);

    // let resultado_busca = login_data[0];
    // setData(resultado_busca);

    let resultado_busca = login_data.find((item) => item.id === String(id_usuario));
    let resultado_validado = (resultado_busca) ? resultado_busca : /* dadosIniciais */ login_data[0];
    setData(resultado_validado);
  }, []);

  const { nome, email, senha, rua, numero, complemento, bairro, cidade, estado, cep, telefone, data_cadastro, data_modificacao_cadastro } = data;

  return (
    <VStack height="full" paddingX={5} paddingY={10} space="4" width="full">
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
      <Button
        width="full"
        variant="solid"
        colorScheme="emerald"
        size="lg"
        marginTop="5"
        onPress={() => navigation.navigate("PerfilEdicao", { id: String((id) ? id : "") })}
      >
        <Text fontSize="2xl" color="white">Alterar</Text>
      </Button>
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
    >
      <Text fontSize="xl" bold>{titulo}</Text>
      <Text fontSize="2xl" marginLeft={5} textAlign="justify">{valor}</Text>
    </HStack>
  );
}
