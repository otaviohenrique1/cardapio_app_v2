import React, { useContext, useEffect, useState } from 'react';
import { Center, Text, Button, VStack  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { dados_iniciais_usuario, UsuarioContext, UsuarioLogin } from '../../context/usuario';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function PerfilEdicao({ navigation }: NavigationProps) {
  const { dataUsuarioLogin } = useContext(UsuarioContext);
  const [dataUsuario, setDataUsuario] = useState<UsuarioLogin>(dados_iniciais_usuario);

  useEffect(() => {
    let id = (dataUsuarioLogin) ? dataUsuarioLogin.id : "0";
    let nome = (dataUsuarioLogin) ? dataUsuarioLogin.nome : "nome";
    let email = (dataUsuarioLogin) ? dataUsuarioLogin.email : "email@email.com";
    setDataUsuario({ id, nome, email });
  }, []);

  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <Text marginBottom={10} fontSize={25}>PerfilEdicao</Text>
      <VStack space={1} alignItems="center" width="full">
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          size="lg"
          onPress={() => navigation.navigate("Perfil", { id: String(dataUsuario.id) })}
        >
          <Text fontSize="xl" color="white">Sair</Text>
        </Button>
      </VStack>
    </Center>
  );
}
