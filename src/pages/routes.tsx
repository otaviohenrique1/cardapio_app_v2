import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import Login from "./Login";
import NovoUsuario from "./NovoUsuario";
import { AppBar } from "../components/AppBar";
import Produto from "./Produto";
import Perfil from "./Perfil";
import Favoritos from "./Favoritos";
import Carrinho from "./Carrinho";
import Historico from "./Historico";
import Busca from "./Busca";
import PerfilEdicao from "./PerfilEdicao";

export type RootStackParamList = {
  Login: undefined;
  NovoUsuario: undefined;
  HomePage: undefined;
  Produto: { id: string };
  Perfil: { id: string };
  PerfilEdicao: { id: string };
  Favoritos: { id: string };
  Historico: { id: string };
  Carrinho: { id: string };
  Busca: undefined;
}

export function StackRoutes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    // <Stack.Navigator initialRouteName="HomePage">
    <Stack.Navigator initialRouteName="Carrinho">
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
        options={{
          header: (props) => (
            <AppBar titulo="Cardapio" exibe_voltar={false} navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          header: (props) => (
            <AppBar titulo="Perfil" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{
          header: (props) => (
            <AppBar titulo="Produto" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="PerfilEdicao"
        component={PerfilEdicao}
        options={{
          header: (props) => (
            <AppBar titulo="PerfilEdicao" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          header: (props) => (
            <AppBar titulo="Favoritos" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Historico"
        component={Historico}
        options={{
          header: (props) => (
            <AppBar titulo="Historico" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          header: (props) => (
            <AppBar titulo="Carrinho" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Busca"
        component={Busca}
        options={{
          header: (props) => (
            <AppBar titulo="Busca" exibe_voltar navigation={props.navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
