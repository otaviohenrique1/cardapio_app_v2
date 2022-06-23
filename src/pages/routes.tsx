import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import Login from "./Login";
import NovoUsuario from "./NovoUsuario";

export type RootStackParamList = {
  Login: undefined;
  NovoUsuario: undefined;
  HomePage: undefined;
}

export function StackRoutes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="NovoUsuario">
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
