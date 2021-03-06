import { useContext, useState, useEffect, useRef } from "react";
import { UsuarioContext, UsuarioLogin, dados_iniciais_usuario } from "../../context/usuario";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { Box, HStack, Icon, IconButton, StatusBar, Text, Menu, Pressable, AlertDialog, Button } from "native-base";
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
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);

  const onClose = () => setIsOpenAlertDialog(false);
  const cancelRef = useRef(null);

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
        <Text
          color="white"
          fontSize="20"
          fontWeight="bold"
          paddingLeft={(exibe_voltar) ? "0" : "5"}
        >{titulo}</Text>
      </HStack>
      <HStack>
        <IconButton
          icon={<Icon as={MaterialIcons} name="home" size="lg" color="white" />}
          padding="5"
          onPress={() => navigation.replace("HomePage")}
        />
        <Menu
          width="48"
          marginRight="2"
          trigger={triggerProps => {
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
          <Menu.Item onPress={() => navigation.replace('Busca', { id: String(dataUsuario.id) })}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="search" size="lg" color="coolGray.600" />
              <Text>Busca</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item onPress={() => navigation.replace('Carrinho', { id: String(dataUsuario.id) })}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="shopping-cart" size="lg" color="coolGray.600" />
              <Text>Carrinho</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item onPress={() => navigation.replace('Perfil', { id: String(dataUsuario.id) })}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="person" size="lg" color="coolGray.600" />
              <Text>Perfil</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item onPress={() => navigation.replace('Favoritos', { id: String(dataUsuario.id) })}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="favorite" size="lg" color="coolGray.600" />
              <Text>Favoritos</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item onPress={() => navigation.replace('Historico', { id: String(dataUsuario.id) })}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="format-list-bulleted" size="lg" color="coolGray.600" />
              <Text>Historico</Text>
            </HStack>
          </Menu.Item>
          <Menu.Item onPress={() => setIsOpenAlertDialog(!isOpenAlertDialog)}>
            <HStack space="2">
              <Icon as={MaterialIcons} name="logout" size="lg" color="coolGray.600" />
              <Text>Sair</Text>
            </HStack>
          </Menu.Item>
        </Menu>
      </HStack>
    </HStack>
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenAlertDialog} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Aviso</AlertDialog.Header>
        <AlertDialog.Body>
          Voc?? quer deslogar do app?
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="solid" colorScheme="danger" onPress={() => {
              setIsOpenAlertDialog(false);
              navigation.replace('Login');
            }}>Sim</Button>
            <Button variant="solid" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>N??o</Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  </>;
}
