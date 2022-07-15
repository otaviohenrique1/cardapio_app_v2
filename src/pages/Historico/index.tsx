import React, { useEffect, useState } from 'react';
import { VStack, FlatList, HStack  } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ItemListaVazia from '../../components/Listas/ItemListaVazia';
import { lista_historico } from './lista_historico';
import ItemListaProdutos from '../../components/Listas/ItemListaProdutos';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Historico({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_historico);
  }, []);

  return (
    <VStack height="full" paddingY={5}>
      {(data.length !== 0) ? (
        <FlatList
          data={data}
          renderItem={(item) => (
            <HStack>
              <ItemListaProdutos
                data={item.item}
                navigation={navigation}
              />
            </HStack>
          )}
          keyExtractor={(item) => (item.id).toString()}
        />
      ) : (
        <ItemListaVazia />
      )}
    </VStack>
  );
}
