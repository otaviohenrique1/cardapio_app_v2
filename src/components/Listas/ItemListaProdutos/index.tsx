import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar, Box, HStack, Icon, Pressable, Spacer, Text, VStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { Formatador } from '../../../utils/Formatador';
import { RootStackParamList } from '../../../pages/routes';

export interface ItemListaProdutosProps {
  data: ProdutoCardapioBaseType;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function ItemListaProdutos(props: ItemListaProdutosProps) {
  const { data, navigation } = props;
  const { id, foto_miniatura, nome, tipo, preco } = data;
  const { url } = foto_miniatura;

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
        <HStack
          space={3}
          justifyContent="space-between"
        >
          {(url) ? (
            <Avatar
              size="48px"
              source={{ uri: url }}
            />
          ) : (
            <Icon
              size="48px"
              as={MaterialIcons}
              name="image-not-supported"
              color="black"
            />
          )}
          <VStack>
            <Text
              _dark={{ color: "warmGray.50" }}
              color="coolGray.800" bold
            >{nome}</Text>
            <Text
              color="coolGray.600"
              _dark={{ color: "warmGray.200" }}
            >{tipo}</Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            _dark={{ color: "warmGray.50" }}
            color="coolGray.800"
            alignSelf="flex-start"
          >{Formatador.FormataValorMonetario(Number(preco))}</Text>
        </HStack>
      </Box>
    </Pressable>
  );
}
