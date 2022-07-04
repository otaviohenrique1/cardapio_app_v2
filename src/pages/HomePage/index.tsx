import React, { useEffect, useState } from 'react';
import { Text, VStack, FlatList, Box, HStack, Avatar, Spacer, Image, Icon } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from "@expo/vector-icons";
import { lista_produtos } from './lista_produtos';
import { Formatador } from '../../utils/Formatador';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_produtos);
  }, []);

  return (
    <Box height="full" paddingX={5} paddingY={5}>
      <FlatList
        data={data}
        renderItem={(item) => {
          const { foto_miniatura, nome, tipo, preco } = item.item;
          const { url } = foto_miniatura;

          return (
            <Box borderBottomWidth="1" _dark={{
              borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={3} justifyContent="space-between">
                {(url) ? (
                  <Avatar size="48px" source={{
                    uri: url
                  }} />
                ) : (
                  <Icon size="48px" as={MaterialIcons} name="image-not-supported" color="black" />
                )}
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {nome}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    {tipo}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                  color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                  {Formatador.FormataValorMonetario(Number(preco))}
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
