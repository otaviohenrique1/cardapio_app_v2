import React, { useEffect, useState } from 'react';
import { Center, Text, Button, VStack, FlatList, HStack  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ItemListaProdutos from '../../components/Listas/ItemListaProdutos';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';
import { lista_favoritos } from './lista_favoritos';
import ItemProdutoFavorito from '../../components/Listas/ItemProdutoFavorito';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Favoritos({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_favoritos);
  }, []);

  return (
    <VStack height="full" paddingY={5}>
      {(data.length !== 0) ? (
        <FlatList
          data={data}
          renderItem={(item) => (
            <HStack>
              <ItemProdutoFavorito
                data={item.item}
                navigation={navigation}
              />
            </HStack>
          )}
          keyExtractor={(item, index) => `${index}-${item.id}`}
        />
      ) : (
        <ItemListaVazia />
      )}
    </VStack>
  );
}
