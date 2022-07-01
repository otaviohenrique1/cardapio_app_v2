import { Box, HStack, Icon, IconButton, StatusBar, Text, Menu, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

interface AppBarProps {
  titulo: string;
  navigation: StackNavigationProp<ParamListBase, string>;
}

export function AppBar(props: AppBarProps) {
  const { titulo, navigation } = props;

  return <>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        {/* <IconButton
          icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />}
          padding="5"
        /> */}
        <Text color="white" fontSize="20" fontWeight="bold" paddingLeft="5">{titulo}</Text>
      </HStack>
      <HStack>
        <IconButton
          icon={<Icon as={MaterialIcons} name="shopping-cart" size="lg" color="white" />}
          padding="5"
          onPress={() => navigation.replace('Carrinho')}
        />
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
            onPress={() => navigation.replace('Perfil')}
          >Perfil</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Favoritos')}
          >Favoritos</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Historico')}
          >Historico</Menu.Item>
          <Menu.Item
            onPress={() => navigation.replace('Login')}
          >Sair</Menu.Item>
        </Menu>
      </HStack>
    </HStack>
  </>;
}
