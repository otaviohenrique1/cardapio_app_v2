import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar, Box, FlatList, HStack, Icon, Pressable, Spacer, Text, VStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { Formatador } from '../../../utils/Formatador';
import { RootStackParamList } from '../../../pages/routes';
import ItemListaProdutos from '../ItemListaProdutos';

export interface ListaProdutosProps {
  data: ProdutoCardapioBaseType[];
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function ListaProdutos(props: ListaProdutosProps) {
  const { data, navigation } = props;

  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <ItemListaProdutos
          data={item.item}
          navigation={navigation}
        />
      )}
      keyExtractor={(item) => (item.id).toString()}
    />
  )
}
