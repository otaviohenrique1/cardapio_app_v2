import React, { useState } from 'react';
import { Center, Text, Button, VStack  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  return (
    <Center height="full" paddingX={5} paddingY={8}>
      <Text marginBottom={10} fontSize={25}>HomePage</Text>
      <VStack space={1} alignItems="center" width="full">
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          size="lg"
          onPress={() => navigation.navigate("Login")}
        >
          <Text fontSize="xl" color="white">Sair</Text>
        </Button>
      </VStack>
    </Center>
  );
}
