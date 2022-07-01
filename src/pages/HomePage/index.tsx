import React, { useEffect, useState } from 'react';
import { Center, Text, VStack, FlatList, Box, HStack, Avatar, Spacer } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { lista_produtos } from '../../utils/listas/lista_produtos_teste/lista_produtos';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_produtos);
  }, []);

  return (
    <Box height="full" paddingX={5}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return (
            <Box borderBottomWidth="1" _dark={{
              borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={3} justifyContent="space-between">
                <Avatar size="48px" source={{
                  uri: item.item.foto_miniatura.url
                }} />
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {item.item.nome}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    {item.item.tipo}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                  color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                  {item.item.preco}
                </Text>
              </HStack>
            </Box>
          );
        }}
        keyExtractor={(item) => (item.id).toString()}
      />
    </Box>
  );
}
