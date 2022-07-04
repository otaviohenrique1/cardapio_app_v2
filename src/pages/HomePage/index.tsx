import React, { useEffect, useState } from 'react';
import { Text, VStack, FlatList, Box, HStack, Avatar, Spacer, Image, Icon } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from "@expo/vector-icons";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function HomePage({ navigation }: NavigationProps) {
  const [data, setData] = useState<ProdutoCardapioBaseType[]>([]);

  useEffect(() => {
    setData(lista_produtos);
  }, []);

  return (
    <Box height="full" paddingX={5}>
      {/* <Image source={{
        uri: require('./imagem_nao_disponivel.png')
      }} alt="Alternate Text" size={"xl"} /> */}
      {/* <MaterialIcons name="image-not-supported" size={24} color="black" /> */}
      
      <FlatList
        data={data}
        renderItem={(item) => {
          // console.log(item.item.foto_miniatura.url);

          return (
            <Box borderBottomWidth="1" _dark={{
              borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={3} justifyContent="space-between">
                {(item.item.foto_miniatura.url) ? (
                  <Avatar size="48px" source={{
                    uri: item.item.foto_miniatura.url
                  }} />
                ) : (
                  <Icon size="40px" as={MaterialIcons} name="image-not-supported" color="black" />
                )}
                {/* <Image
                  source={{
                    width: 50,
                    uri: item.item.foto_miniatura.url
                    // uri: require('./imagem_nao_disponivel.png')
                  }} alt="Alternate Text"
                /> */}
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {item.item.nome}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    {item.item.tipo}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                  color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                  {item.item.preco}
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

const lista_produtos: ProdutoCardapioBaseType[] = [
  {
    id: 1,
    nome: "Angus Burger",
    tipo: "Comida",
    preco: 15,
    foto_miniatura: {
      id: 1,
      url: require("./fotos_produtos_miniaturas/angus_burger.jpg"),
      nome: 'angus_burger',
    },
    ativo: true,
  },
  {
    id: 2,
    nome: "Cheeseburger",
    tipo: "Comida",
    preco: 17,
    foto_miniatura: {
      id: 2,
      url: require("./fotos_produtos_miniaturas/cheeseburger.jpg"),
      nome: 'Cheeseburger',
    },
    ativo: true,
  },
  {
    id: 3,
    nome: "rice_burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 3,
      url: require("./fotos_produtos_miniaturas/rice_burger.jpg"),
      nome: 'rice_burger',
    },
    ativo: true,
  },
  {
    id: 4,
    nome: "slug_burger",
    tipo: "Comida",
    preco: 21,
    foto_miniatura: {
      id: 4,
      url: require("./fotos_produtos_miniaturas/slug_burger.jpg"),
      nome: 'slug_burger',
    },
    ativo: true,
  },
  {
    id: 5,
    nome: "x_hamburger",
    tipo: "Comida",
    preco: 10,
    foto_miniatura: {
      id: 5,
      url: require("./fotos_produtos_miniaturas/x_hamburger.jpg"),
      nome: 'x_hamburger',
    },
    ativo: true,
  },
  {
    id: 6,
    nome: "barbecue_burger",
    tipo: "Comida",
    preco: 25,
    foto_miniatura: {
      id: 6,
      url: require("./fotos_produtos_miniaturas/barbecue_burger.jpg"),
      nome: 'barbecue_burger',
    },
    ativo: true,
  },
  {
    id: 7,
    nome: "chili_burger",
    tipo: "Comida",
    preco: 11,
    foto_miniatura: {
      id: 7,
      url: require("./fotos_produtos_miniaturas/chili_burger.jpg"),
      nome: 'chili_burger',
    },
    ativo: true,
  },
  {
    id: 8,
    nome: "kiwiburger",
    tipo: "Comida",
    preco: 30,
    foto_miniatura: {
      id: 8,
      url: require("./fotos_produtos_miniaturas/kiwiburger.jpg"),
      nome: 'kiwiburger',
    },
    ativo: true,
  },
  {
    id: 9,
    nome: "salmon_burger",
    tipo: "Comida",
    preco: 32,
    foto_miniatura: {
      id: 9,
      url: require("./fotos_produtos_miniaturas/salmon_burger.jpg"),
      nome: 'salmon_burger',
    },
    ativo: true,
  },
  {
    id: 10,
    nome: "steak_burger",
    tipo: "Comida",
    preco: 14,
    foto_miniatura: {
      id: 10,
      url: require("./fotos_produtos_miniaturas/steak_burger.jpg"),
      nome: 'steak_burger',
    },
    ativo: true,
  },
  {
    id: 11,
    nome: "buffalo_burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 11,
      url: require("./fotos_produtos_miniaturas/buffalo_burger.jpg"),
      nome: 'buffalo_burger',
    },
    ativo: true,
  },
  {
    id: 12,
    nome: "chori_burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 12,
      url: require("./fotos_produtos_miniaturas/chori_burger.jpg"),
      nome: 'chori_burger',
    },
    ativo: true,
  },
  {
    id: 13,
    nome: "luther_burger",
    tipo: "Comida",
    preco: 21,
    foto_miniatura: {
      id: 13,
      url: require("./fotos_produtos_miniaturas/luther_burger.jpg"),
      nome: 'luther_burger',
    },
    ativo: true,
  },
  {
    id: 14,
    nome: "slaters_50_50_burger",
    tipo: "Comida",
    preco: 8,
    foto_miniatura: {
      id: 14,
      url: require("./fotos_produtos_miniaturas/slaters_50_50_burger.jpg"),
      nome: 'slaters_50_50_burger',
    },
    ativo: true,
  },
  {
    id: 15,
    nome: "steamed_cheeseburger",
    tipo: "Comida",
    preco: 9,
    foto_miniatura: {
      id: 15,
      url: require("./fotos_produtos_miniaturas/steamed_cheeseburger.jpg"),
      nome: 'steamed_cheeseburger',
    },
    ativo: true,
  },
  {
    id: 16,
    nome: "butter_burger",
    tipo: "Comida",
    preco: 15,
    foto_miniatura: {
      id: 16,
      url: require("./fotos_produtos_miniaturas/butter_burger.jpg"),
      nome: 'butter_burger',
    },
    ativo: true,
  },
  {
    id: 17,
    nome: "hawaii_burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 17,
      url: require("./fotos_produtos_miniaturas/hawaii_burger.jpg"),
      nome: 'hawaii_burger',
    },
    ativo: true,
  },
  {
    id: 18,
    nome: "oklahoma_onion_burger",
    tipo: "Comida",
    preco: 23,
    foto_miniatura: {
      id: 18,
      url: require("./fotos_produtos_miniaturas/oklahoma_onion_burger.jpg"),
      nome: 'oklahoma_onion_burger',
    },
    ativo: true,
  },
  {
    id: 19,
    nome: "slider_burger",
    tipo: "Comida",
    preco: 25,
    foto_miniatura: {
      id: 19,
      url: require("./fotos_produtos_miniaturas/slider_burger.jpg"),
      nome: 'slider_burger',
    },
    ativo: true,
  },
  {
    id: 20,
    nome: "teriyaki_burger",
    tipo: "Comida",
    preco: 13,
    foto_miniatura: {
      id: 20,
      url: require("./fotos_produtos_miniaturas/teriyaki_burger.jpg"),
      nome: 'teriyaki_burger',
    },
    ativo: true,
  },
  {
    id: 21,
    nome: "california_burger",
    tipo: "Comida",
    preco: 20,
    foto_miniatura: {
      id: 21,
      url: require("./fotos_produtos_miniaturas/california_burger.jpg"),
      nome: 'california_burger',
    },
    ativo: true,
  },
  {
    id: 22,
    nome: "Jucy Lucy cheeseburger",
    tipo: "Comida",
    preco: 13,
    foto_miniatura: {
      id: 22,
      url: require("./fotos_produtos_miniaturas/jucy_lucy_cheeseburger.JPG"),
      nome: 'jucy_lucy_cheeseburger',
    },
    ativo: true,
  },
  {
    id: 23,
    nome: "Patty Melt burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 23,
      url: require("./fotos_produtos_miniaturas/patty_melt_burger.jpg"),
      nome: 'patty_melt_burger',
    },
    ativo: true,
  },
  {
    id: 24,
    nome: "Slopper burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 24,
      url: require("./fotos_produtos_miniaturas/slopper_burger.jpg"),
      nome: 'slopper_burger',
    },
    ativo: true,
  },
  {
    id: 25,
    nome: "Veggie burger",
    tipo: "Comida",
    preco: 33,
    foto_miniatura: {
      id: 25,
      url: require("./fotos_produtos_miniaturas/veggie_burger.jpg"),
      nome: 'veggie_burger',
    },
    ativo: true,
  },
  {
    id: 26,
    nome: "Kimchi burger",
    tipo: "Comida",
    preco: 31,
    foto_miniatura: {
      id: 26,
      url: require("./fotos_produtos_miniaturas/kimchi_burger.jpg"),
      nome: 'kimchi_burger',
    },
    ativo: true,
  },
  {
    id: 27,
    nome: "Coca-cola 1,5l",
    tipo: "Bebida",
    preco: 4.5,
    foto_miniatura: {
      id: 27,
      url: require("./fotos_produtos_miniaturas/coca_cola_1_5l.JPG"),
      nome: 'coca_cola_1_5l',
    },
    ativo: true,
  },
  {
    id: 28,
    nome: "Coca-cola 1l",
    tipo: "Bebida",
    preco: 4,
    foto_miniatura: {
      id: 28,
      url: require("./fotos_produtos_miniaturas/coca_cola_1l.JPG"),
      nome: 'coca_cola_1l',
    },
    ativo: true,
  },
  {
    id: 29,
    nome: "Coca-cola 2,5l",
    tipo: "Bebida",
    preco: 6,
    foto_miniatura: {
      id: 29,
      url: require("./fotos_produtos_miniaturas/coca_cola_2_5l.JPG"),
      nome: 'coca_cola_2_5l',
    },
    ativo: true,
  },
  {
    id: 30,
    nome: "Coca-cola 200ml",
    tipo: "Bebida",
    preco: 2,
    foto_miniatura: {
      id: 30,
      url: require("./fotos_produtos_miniaturas/coca_cola_200ml.JPG"),
      nome: 'coca_cola_200ml',
    },
    ativo: true,
  },
  {
    id: 31,
    nome: "Coca-cola 220ml",
    tipo: "Bebida",
    preco: 2.5,
    foto_miniatura: {
      id: 31,
      url: require("./fotos_produtos_miniaturas/coca_cola_220ml.JPG"),
      nome: 'coca_cola_220ml',
    },
    ativo: true,
  },
  {
    id: 32,
    nome: "Coca-cola 2l",
    tipo: "Bebida",
    preco: 5,
    foto_miniatura: {
      id: 32,
      url: require("./fotos_produtos_miniaturas/coca_cola_2l.JPG"),
      nome: 'coca_cola_2l',
    },
    ativo: true,
  },
  {
    id: 33,
    nome: "Coca-cola 350ml",
    tipo: "Bebida",
    preco: 3,
    foto_miniatura: {
      id: 33,
      url: require("./fotos_produtos_miniaturas/coca_cola_350ml.JPG"),
      nome: 'coca_cola_350ml',
    },
    ativo: true,
  },
  {
    id: 34,
    nome: "Coca-cola 3l",
    tipo: "Bebida",
    preco: 7,
    foto_miniatura: {
      id: 34,
      url: require("./fotos_produtos_miniaturas/coca_cola_3l.JPG"),
      nome: 'coca_cola_3l',
    },
    ativo: true,
  },
  {
    id: 35,
    nome: "Coca-cola 600ml",
    tipo: "Bebida",
    preco: 3.5,
    foto_miniatura: {
      id: 35,
      url: require("./fotos_produtos_miniaturas/coca_cola_600ml.JPG"),
      nome: 'coca_cola_600ml',
    },
    ativo: true,
  },
  {
    id: 36,
    nome: "Coca-cola 600ml",
    tipo: "Bebida",
    preco: 3.5,
    foto_miniatura: {
      id: 36,
      url: '',
      nome: 'coca_cola_600ml',
    },
    ativo: true,
  },
];
