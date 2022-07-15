import React, { useEffect, useState } from 'react';
import { VStack, FlatList, HStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { lista_carrinho } from './lista_carrinho';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';
import ItemListaProdutos from '../../components/Listas/ItemListaProdutos';
import ItemProdutoCarrinho from '../../components/Listas/ItemProdutoCarrinho';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Carrinho({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_carrinho);
  }, []);

  return (
    <VStack height="full" paddingY={5}>
      {(data.length !== 0) ? (
        <FlatList
          data={data}
          renderItem={(item) => (
            <HStack>
              <ItemProdutoCarrinho
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
