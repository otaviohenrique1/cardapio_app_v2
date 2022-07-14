import React, { useEffect, useState } from 'react';
import { Text, VStack, FlatList, Box, HStack, Avatar, Spacer, Image, Icon, Pressable } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from "@expo/vector-icons";
import { lista_produtos } from './lista_produtos';
import { Formatador } from '../../utils/Formatador';
import ListaProdutos from '../../components/Listas/ListaProdutos';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_produtos);
  }, []);

  return (
    <VStack height="full" paddingY={5}>
      {(data.length !== 0) ? (
        <ListaProdutos
          data={data}
          navigation={navigation}
        />
      ) : (
        <ItemListaVazia />
      )}
    </VStack>
  );
}
