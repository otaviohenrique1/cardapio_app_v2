import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/pages/routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
