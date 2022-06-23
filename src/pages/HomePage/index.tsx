import React, { useState } from 'react';
import { Center, Container, Text, Button, VStack  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<string>("")

  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <Text marginBottom={10} fontSize={25}>HomePage</Text>
      <Text marginBottom={10} fontSize={25}>{data}</Text>
      <VStack space={1} alignItems="center" width="full">
        <Button
          width="full"
          variant="solid"
          colorScheme="primary"
          size="lg"
          onPress={() => {
            setData("Foda-se");
          }}
        >
          <Text fontSize="xl" color="white">Entrar</Text>
        </Button>
        <Button
          width="full"
          variant="solid"
          colorScheme="danger"
          size="lg"
          onPress={() => {
            setData("");
          }}
        >
          <Text fontSize="xl" color="white">Limpar</Text>
        </Button>
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          size="lg"
          onPress={() => navigation.navigate("NovoUsuario")}
        >
          <Text fontSize="xl" color="white">Novo Cadastro</Text>
        </Button>
      </VStack>
    </Center>
  );
}