import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/pages/routes';
import { NativeBaseProvider } from 'native-base';
import GlobalContext from './src/context';

export default function App() {
  return (
    <GlobalContext>
      <NavigationContainer>
        <NativeBaseProvider>
          <StackRoutes />
        </NativeBaseProvider>
      </NavigationContainer>
    </GlobalContext>
  );
}
