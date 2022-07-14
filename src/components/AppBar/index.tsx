import { useContext, useState, useEffect } from "react";
import { UsuarioContext, UsuarioLogin, dados_iniciais_usuario } from "../../context/usuario";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { Box, HStack, Icon, IconButton, StatusBar, Text, Menu, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface AppBarProps {
  titulo: string;
  navigation: StackNavigationProp<ParamListBase, string>;
  exibe_voltar: boolean;
}

export function AppBar(props: AppBarProps) {
  const { titulo, navigation, exibe_voltar } = props;
  const { dataUsuarioLogin } = useContext(UsuarioContext);
  const [dataUsuario, setDataUsuario] = useState<UsuarioLogin>(dados_iniciais_usuario);

  useEffect(() => {
    let id = (dataUsuarioLogin) ? dataUsuarioLogin.id : "0";
    let nome = (dataUsuarioLogin) ? dataUsuarioLogin.nome : "nome";
    let email = (dataUsuarioLogin) ? dataUsuarioLogin.email : "email@email.com";
    setDataUsuario({ id, nome, email });
  }, []);

  return <>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        {/* <IconButton
          icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />}
          padding="5"
        /> */}{/* Menu hamburger */}
        {(exibe_voltar) ? (
          <Pressable
            onPress={() => navigation.replace("HomePage")}
            padding="5"
            justifyContent="center"
            alignItems="center"
          >
            <Icon size="lg" as={MaterialIcons} name="arrow-back" color="white" />
          </Pressable>
        ) : null}
        {/* <IconButton
            icon={<Icon size="lg" as={MaterialIcons} name="arrow-back" color="white" />}
            padding="5"
            onPress={() => navigation.replace("HomePage")}
          /> */}
        <Text
          color="white"
          fontSize="20"
          fontWeight="bold"
          paddingLeft={(exibe_voltar) ? "0" : "5"}
        >{titulo}</Text>
      </HStack>
      <HStack>
        {/* <IconButton
          icon={<Icon as={MaterialIcons} name="shopping-cart" size="lg" color="white" />}
          padding="5"
          onPress={() => navigation.replace('Carrinho', { id: String(dataUsuario.id) })}
        /> */}
        <IconButton
          icon={<Icon as={MaterialIcons} name="search" size="lg" color="white" />}
          padding="5"
          onPress={() => navigation.replace('Busca')}
        />
        <Menu w="190" trigger={triggerProps => {
          return (
            <Pressable
              accessibilityLabel="Perfil usuario" {...triggerProps}
              alignItems="center"
              justifyContent="center"
              padding="5"
            >
              <Icon as={MaterialIcons} name="more-vert" size="lg" color="white" />
            </Pressable>
          );
        }}>
          <Menu.Item
            onPress={() => navigation.replace('Carrinho', { id: String(dataUsuario.id) })}
          >Carrinho</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Perfil', { id: String(dataUsuario.id) })}
          >Perfil</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Favoritos', { id: String(dataUsuario.id) })}
          >Favoritos</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Historico', { id: String(dataUsuario.id) })}
          >Historico</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Login')}
          >Sair</Menu.Item>
        </Menu>
      </HStack>
    </HStack>
  </>;
}
