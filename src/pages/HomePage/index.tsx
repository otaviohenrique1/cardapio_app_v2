import React, { useEffect, useState } from 'react';
import { VStack } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { lista_produtos } from './lista_produtos';
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
