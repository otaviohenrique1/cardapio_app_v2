import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar, Box, HStack, Icon, IconButton, Pressable, Spacer, Text, VStack } from 'native-base';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Formatador } from '../../../utils/Formatador';
import { RootStackParamList } from '../../../pages/routes';

export interface ItemProdutoFavoritoProps {
  data: ProdutoCardapioBaseType;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function ItemProdutoFavorito(props: ItemProdutoFavoritoProps) {
  const { data, navigation } = props;
  const { id, foto_miniatura, nome, tipo, preco } = data;
  const { url } = foto_miniatura;
  const [favorito, setFavorito] = useState<boolean>(true);

  return (
    <Pressable
      width="full"
      onPress={() => navigation.navigate("Produto", { id: String(id) })}
    >
      <Box
        borderBottomWidth="1"
        _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200"
        pl="4" pr="5" py="2"
      >
        <HStack space={3} justifyContent="space-between" alignItems="center">
          {(url) ? (
            <Avatar size="48px" source={{ uri: url }} />
          ) : (
            <Icon size="48px" as={MaterialIcons} name="image-not-supported" color="black" />
          )}
          <VStack>
            <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold fontSize="md">{nome}</Text>
            <Text color="coolGray.600" _dark={{ color: "warmGray.200" }} fontSize="md">{tipo}</Text>
          </VStack>
          <Spacer />
          <HStack alignItems="center" justifyContent="center" flexDirection="row">
            <Text
              fontSize="md"
              _dark={{ color: "warmGray.50" }}
              color="coolGray.800"
              height="full"
              marginRight="3"
            >{Formatador.FormataValorMonetario(Number(preco))}</Text>
            <IconButton
              icon={(favorito) ? (
                <Icon as={AntDesign} name="heart" size="2xl" color="indigo.600" />
              ) : (
                <Icon as={AntDesign} name="hearto" size="2xl" color="indigo.600" />
              )}
              onPress={() => setFavorito(!favorito)}
            />
          </HStack>
        </HStack>
      </Box>
    </Pressable>
  );
}
