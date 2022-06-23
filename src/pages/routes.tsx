import { createStackNavigator } from "@react-navigation/stack";
import { Box, Center, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import HomePage from "./HomePage";
import Login from "./Login";
import NovoUsuario from "./NovoUsuario";
import { MaterialIcons } from "@expo/vector-icons";

export type RootStackParamList = {
  Login: undefined;
  NovoUsuario: undefined;
  HomePage: undefined;
}

export function StackRoutes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovoUsuario"
        component={NovoUsuario}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ header: () => (
          <AppBar titulo="HomePage" />
        ) }}
      />
    </Stack.Navigator>
  );
}

interface AppBarProps {
  titulo: string;
}

function AppBar(props: AppBarProps) {
  const { titulo } = props;

  return <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            {titulo}
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>;
}