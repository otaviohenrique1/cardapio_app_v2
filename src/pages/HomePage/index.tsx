import React, { useEffect, useState } from 'react';
import { FlatList, VStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { lista_produtos } from './lista_produtos';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';
import ItemListaProdutos from '../../components/Listas/ItemListaProdutos';

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
        <FlatList
          data={data}
          renderItem={(item) => (
            <ItemListaProdutos
              data={item.item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => `${index}-${item.id}`}
        />
      ) : (
        <ItemListaVazia />
      )}
    </VStack>
  );
}
