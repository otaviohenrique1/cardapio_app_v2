const pao: IngredientesTypes = {
  id: 1,
  nome: "Pão",
  quantidade: 1,
  quantidade_unidade: "unidade(s)",
  preco: 2,
  removivel: false,
};

const hamburguer: IngredientesTypes = {
  id: 2,
  nome: "Hamburguer",
  quantidade: 1,
  quantidade_unidade: "unidade(s)",
  preco: 3,
  removivel: true,
};

const queijo: IngredientesTypes = {
  id: 3,
  nome: "Queijo",
  quantidade: 50,
  quantidade_unidade: "grama(s)",
  preco: 2,
  removivel: true,
}

const alface: IngredientesTypes = {
  id: 4,
  nome: "Alface",
  quantidade: 1,
  quantidade_unidade: "unidade(s)",
  preco: 2,
  removivel: true,
}

const queijo_cheddar: IngredientesTypes = {
  id: 5,
  nome: "Queijo",
  quantidade: 50,
  quantidade_unidade: "grama(s)",
  preco: 3,
  removivel: true,
}

const cebola: IngredientesTypes = {
  id: 6,
  nome: "Cebola",
  quantidade: 100,
  quantidade_unidade: "grama(s)",
  preco: 1.5,
  removivel: true,
}

const milho: IngredientesTypes = {
  id: 7,
  nome: "Milho",
  quantidade: 80,
  quantidade_unidade: "grama(s)",
  preco: 2,
  removivel: true,
}

const molho: IngredientesTypes = {
  id: 8,
  nome: "Molho",
  quantidade: 200,
  quantidade_unidade: "mililitros(s)",
  preco: 4,
  removivel: true,
}

export const lista_produtos: ProdutoCardapioType[] = [
  {
    id: 1,
    nome: "Angus Burger",
    tipo: "Comida",
    preco: 15,
    foto_miniatura: {
      id: 1,
      url: require("./fotos_produtos_miniaturas/angus_burger.jpg"),
      nome: "Angus Burger",
    },
    ativo: true,
    codigo: "04e8cfee-2d35-42e8-9554-67b2840fa283",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer feito com carne bovina de gado Angus. O nome 'Angus burger' é usado por várias cadeias de hambúrgueres de fast-food para um ou mais hambúrgueres 'premium'; no entanto, não pertence a nenhuma empresa. Hambúrgueres Angus congelados pré-fabricados estão cada vez mais disponíveis nos varejistas.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 1,
        url: require("./fotos_produtos_miniaturas/angus_burger.jpg"),
        nome: 'angus_burger',
      },
      {
        id: 2,
        url: require("./fotos_produtos_miniaturas/angus_burger.jpg"),
        nome: 'angus_burger',
      },
      {
        id: 3,
        url: require("./fotos_produtos_miniaturas/angus_burger.jpg"),
        nome: 'angus_burger',
      },
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 2,
    nome: "Cheeseburger",
    tipo: "Comida",
    preco: 17,
    foto_miniatura: {
      id: 2,
      url: require("./fotos_produtos_miniaturas/cheeseburger.jpg"),
      nome: "Cheeseburger",
    },
    ativo: true,
    codigo: "f749bf18-f18b-4aeb-a89c-ff7f71356a1d",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer acompanhado de queijo derretido. O próprio termo é uma junção das palavras 'queijo' e 'hambúrguer'. O queijo geralmente é fatiado e adicionado pouco tempo antes do hambúrguer terminar de cozinhar para permitir que derreta. Em restaurantes de fast food, o queijo que é adicionado ao cheeseburger é tipicamente americano, mas existem muitas outras variações. Mussarela, queijo azul, queijo suíço, pimenta jack e especialmente cheddar são escolhas populares.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 2,
        url: require("./fotos_produtos_miniaturas/cheeseburger.jpg"),
        nome: 'Cheeseburger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo_cheddar
    ],
    ingredientes_opcionais: [
      hamburguer, queijo_cheddar
    ],
    ingredientes_removiveis: [
      hamburguer, queijo_cheddar
    ],
  },
  {
    id: 3,
    nome: "Rice Burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 3,
      url: require("./fotos_produtos_miniaturas/rice_burger.jpg"),
      nome: "Rice Burger",
    },
    ativo: true,
    codigo: "227ec513-b722-4d4c-9b08-7ae2412acda6",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Estilo de hambúrguer em que o pão é um bolo de arroz comprimido. A cadeia de restaurantes de fast-food MOS Burger introduziu o hambúrguer de arroz em 1987 e, desde então, tornou-se um item alimentar popular no leste da Ásia.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 3,
        url: require("./fotos_produtos_miniaturas/rice_burger.jpg"),
        nome: 'rice_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo, molho
    ],
    ingredientes_opcionais: [
      hamburguer, queijo, molho
    ],
    ingredientes_removiveis: [
      hamburguer, queijo, molho
    ],
  },
  {
    id: 4,
    nome: "Slug Burger",
    tipo: "Comida",
    preco: 21,
    foto_miniatura: {
      id: 4,
      url: require("./fotos_produtos_miniaturas/slug_burger.jpg"),
      nome: "Slug Burger",
    },
    ativo: true,
    codigo: "623002a0-122b-4470-bdab-01bdddc9fc99",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Delicadeza tradicional do sul encontrada no nordeste do Mississippi, particularmente Booneville e Corinto. A receita original foi feita para ajudar as pessoas a aumentar sua oferta de carne bovina, adicionando migalhas de pão velhas à carne. O nome vem do hambúrguer originalmente custando 5 centavos, ou um níquel (uma 'lesma'). Hoje, um slugburger é um hambúrguer feito de uma mistura de carne bovina ou suína e um extensor barato, como soja ou farinha de soja, é frito em óleo. Normalmente é servido em um pão com mostarda, picles, cebola e, em alguns lugares, com batatas fritas.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 4,
        url: require("./fotos_produtos_miniaturas/slug_burger.jpg"),
        nome: 'slug_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo, molho
    ],
    ingredientes_opcionais: [
      hamburguer, queijo, molho
    ],
    ingredientes_removiveis: [
      hamburguer, queijo, molho
    ],
  },
  {
    id: 5,
    nome: "X-hamburguer",
    tipo: "Comida",
    preco: 10,
    foto_miniatura: {
      id: 5,
      url: require("./fotos_produtos_miniaturas/x_hamburguer.jpg"),
      nome: "X-hamburguer",
    },
    ativo: true,
    codigo: "eeef22f5-082e-458b-8749-2047a98244b6",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída, geralmente carne bovina - colocados dentro de um pão fatiado ou pão. Hambúrgueres são frequentemente servidos com queijo, alface, tomate, cebola, picles, bacon ou chilis; condimentos como ketchup, mostarda, maionese, relish ou um 'molho especial', muitas vezes uma variação do molho Thousand Island; e são frequentemente colocados em pães de sementes de gergelim.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 5,
        url: require("./fotos_produtos_miniaturas/x_hamburguer.jpg"),
        nome: 'x_hamburguer',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 6,
    nome: "Barbecue Burger",
    tipo: "Comida",
    preco: 25,
    foto_miniatura: {
      id: 6,
      url: require("./fotos_produtos_miniaturas/barbecue_burger.jpg"),
      nome: "Barbecue Burger",
    },
    ativo: true,
    codigo: "f8d28e71-328a-4fca-94ad-91129520ce3d",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Preparado com carne moída, misturado com cebola e molho barbecue, e depois grelhado. Uma vez que a carne tenha sido virada uma vez, o molho barbecue é espalhado por cima e grelhado até o molho caramelizar. O pão é untado com manteiga e também espalhado com uma leve camada de molho barbecue, depois torrado na grelha.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 6,
        url: require("./fotos_produtos_miniaturas/barbecue_burger.jpg"),
        nome: 'barbecue_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo, molho
    ],
    ingredientes_opcionais: [
      hamburguer, queijo, molho
    ],
    ingredientes_removiveis: [
      hamburguer, queijo, molho
    ],
  },
  {
    id: 7,
    nome: "Chili Burger",
    tipo: "Comida",
    preco: 11,
    foto_miniatura: {
      id: 7,
      url: require("./fotos_produtos_miniaturas/chili_burger.jpg"),
      nome: "Chili Burger",
    },
    ativo: true,
    codigo: "55fcff6e-22ce-4130-a9fb-e9c7ff01d3d6",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Consiste em um hambúrguer, com a empada coberta com chili com carne.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 7,
        url: require("./fotos_produtos_miniaturas/chili_burger.jpg"),
        nome: 'chili_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 8,
    nome: "Kiwiburger",
    tipo: "Comida",
    preco: 30,
    foto_miniatura: {
      id: 8,
      url: require("./fotos_produtos_miniaturas/kiwiburger.jpg"),
      nome: "Kiwiburger",
    },
    ativo: true,
    codigo: "57f0c932-d427-4073-8401-3cf6bc31cd0c",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Ingredientes populares de hambúrgueres regionais na Austrália e Nova Zelândia incluem beterraba enlatada, abacaxi e ovo frito. Na foto é um hambúrguer com fatias de beterraba enlatada dentro dele.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 8,
        url: require("./fotos_produtos_miniaturas/kiwiburger.jpg"),
        nome: 'kiwiburger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 9,
    nome: "Salmon Burger",
    tipo: "Comida",
    preco: 32,
    foto_miniatura: {
      id: 9,
      url: require("./fotos_produtos_miniaturas/salmon_burger.jpg"),
      nome: "Salmon Burger",
    },
    ativo: true,
    codigo: "be54fadd-e987-4d4e-ad3d-ff63c118251a",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Fishcake feito principalmente de salmão no estilo de um hambúrguer. Hambúrgueres de salmão são especialmente comuns no Alasca, onde são oferecidos rotineiramente como uma alternativa aos hambúrgueres de carne bovina.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 9,
        url: require("./fotos_produtos_miniaturas/salmon_burger.jpg"),
        nome: 'salmon_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 10,
    nome: "Steak Burger",
    tipo: "Comida",
    preco: 14,
    foto_miniatura: {
      id: 10,
      url: require("./fotos_produtos_miniaturas/steak_burger.jpg"),
      nome: "Steak Burger",
    },
    ativo: true,
    codigo: "1f10129a-518d-4d28-a240-0d8352eaf5b7",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Normalmente preparado com carne de bife moída, fatiada ou picada. Carnes adicionais também são usadas.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 10,
        url: require("./fotos_produtos_miniaturas/steak_burger.jpg"),
        nome: 'steak_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 11,
    nome: "Buffalo Burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 11,
      url: require("./fotos_produtos_miniaturas/buffalo_burger.jpg"),
      nome: "Buffalo Burger",
    },
    ativo: true,
    codigo: "3e485e7d-d6ae-411d-afe1-8dd1a5dd030a",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Preparados com carne do bisonte americano, hambúrgueres de búfalo têm menos colesterol, menos gordura e menos calorias do que hambúrgueres de carne bovina e de frango. A American Heart Association recomendou hambúrgueres de búfalo em 1997 como mais saudáveis para o coração do que frango ou carne bovina.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 11,
        url: require("./fotos_produtos_miniaturas/buffalo_burger.jpg"),
        nome: 'buffalo_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 12,
    nome: "Chori Burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 12,
      url: require("./fotos_produtos_miniaturas/chori_burger.jpg"),
      nome: "Chori Burger",
    },
    ativo: true,
    codigo: "e62484de-2bf3-4d68-a3f1-d1fb5bf0dc04",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "um hambúrguer filipino feito caracteristicamente com rissóis de chouriço (longganisa), ketchup de banana, maionese e atchara, além de tomate e alface. Foi popularizado pela primeira vez pelo Merly's BBQ, uma barraca de comida de rua na ilha de Boracay, nas Filipinas.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 12,
        url: require("./fotos_produtos_miniaturas/chori_burger.jpg"),
        nome: 'chori_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 13,
    nome: "Luther Burger",
    tipo: "Comida",
    preco: 21,
    foto_miniatura: {
      id: 13,
      url: require("./fotos_produtos_miniaturas/luther_burger.jpg"),
      nome: "Luther Burger",
    },
    ativo: true,
    codigo: "a48a70f5-5104-4252-aaad-f4449ced2a24",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer ou cheeseburger preparado com uma ou mais rosquinhas vitrificadas no lugar do pão",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 13,
        url: require("./fotos_produtos_miniaturas/luther_burger.jpg"),
        nome: 'luther_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 14,
    nome: "Slaters 50/50 burger",
    tipo: "Comida",
    preco: 8,
    foto_miniatura: {
      id: 14,
      url: require("./fotos_produtos_miniaturas/slaters_50_50_burger.jpg"),
      nome: "Slaters 50/50 burger",
    },
    ativo: true,
    codigo: "4c73eb61-a60b-40b8-aae0-d94e354954ab",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Meio bacon moído, meio hambúrguer de carne moída desenvolvido por Scott Slater para o restaurante Slater's 50/50. Outra variedade é metade de carne de canguru e metade de bacon.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 14,
        url: require("./fotos_produtos_miniaturas/slaters_50_50_burger.jpg"),
        nome: 'slaters_50_50_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 15,
    nome: "Steamed Cheeseburger",
    tipo: "Comida",
    preco: 9,
    foto_miniatura: {
      id: 15,
      url: require("./fotos_produtos_miniaturas/steamed_cheeseburger.jpg"),
      nome: "Steamed Cheeseburger",
    },
    ativo: true,
    codigo: "e1ab70dd-c745-4cdd-9088-bc0b142eb083",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Em vez de ser frito em uma panela ou grelhado em uma grelha, um cheeseburger no vapor é cozido no vapor em um armário de aço inoxidável contendo bandejas que contêm um hambúrguer ou um pedaço de queijo. Este método de cozimento faz com que a gordura da carne derreta, resultando em um hambúrguer úmido e suculento que é então colocado em um pão e coberto com o queijo derretido. Várias coberturas habituais podem então ser adicionadas ao hambúrguer.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 15,
        url: require("./fotos_produtos_miniaturas/steamed_cheeseburger.jpg"),
        nome: 'steamed_cheeseburger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 16,
    nome: "Butter Burger",
    tipo: "Comida",
    preco: 15,
    foto_miniatura: {
      id: 16,
      url: require("./fotos_produtos_miniaturas/butter_burger.jpg"),
      nome: "Butter Burger",
    },
    ativo: true,
    codigo: "5b0c56f2-c231-43e4-b96a-102898b24969",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "No Upper Midwest, particularmente Wisconsin, os hambúrgueres são muitas vezes feitos com um pão amanteigado, manteiga como um dos ingredientes do hambúrguer ou com um pedaço de manteiga em cima do hambúrguer.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 16,
        url: require("./fotos_produtos_miniaturas/butter_burger.jpg"),
        nome: 'butter_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 17,
    nome: "Hawaii Burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 17,
      url: require("./fotos_produtos_miniaturas/hawaii_burger.jpg"),
      nome: "Hawaii Burger",
    },
    ativo: true,
    codigo: "7b2952b1-4ad7-4cb8-ae4a-f2fd4093e112",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coberto com abacaxi e muitas vezes molho teriyaki (da cultura nipo-americana)",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 17,
        url: require("./fotos_produtos_miniaturas/hawaii_burger.jpg"),
        nome: 'hawaii_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 18,
    nome: "Oklahoma Onion Burger",
    tipo: "Comida",
    preco: 23,
    foto_miniatura: {
      id: 18,
      url: require("./fotos_produtos_miniaturas/oklahoma_onion_burger.jpg"),
      nome: "Oklahoma Onion Burger",
    },
    ativo: true,
    codigo: "37f4f852-96b0-4eca-af81-e6e361c00d12",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Um hambúrguer que tem muitas cebolas amarelas em fatias finas empilhadas em cima da carne moída antes de esmagar. Foi concebido durante a Grande Depressão no oeste de Oklahoma como uma maneira de os clientes locais estenderem o suprimento de carne bovina de um restaurante.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 18,
        url: require("./fotos_produtos_miniaturas/oklahoma_onion_burger.jpg"),
        nome: 'oklahoma_onion_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 19,
    nome: "Slider Burger",
    tipo: "Comida",
    preco: 25,
    foto_miniatura: {
      id: 19,
      url: require("./fotos_produtos_miniaturas/slider_burger.jpg"),
      nome: "Slider Burger",
    },
    ativo: true,
    codigo: "47bb1a62-3c1f-4f14-8d62-5717d172675f",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Refere-se principalmente a pequenos hambúrgueres, mas também pode cobrir qualquer pequeno sanduíche servido em um rolo deslizante",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 19,
        url: require("./fotos_produtos_miniaturas/slider_burger.jpg"),
        nome: 'slider_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 20,
    nome: "Teriyaki Burger",
    tipo: "Comida",
    preco: 13,
    foto_miniatura: {
      id: 20,
      url: require("./fotos_produtos_miniaturas/teriyaki_burger.jpg"),
      nome: "Teriyaki Burger",
    },
    ativo: true,
    codigo: "c3600a83-06fb-4755-868b-243c0a313f28",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer teriyaki refere-se a uma variedade de hambúrguer coberto com molho teriyaki ou com o molho trabalhado no hambúrguer de carne moída.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 20,
        url: require("./fotos_produtos_miniaturas/teriyaki_burger.jpg"),
        nome: 'teriyaki_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 21,
    nome: "California Burger",
    tipo: "Comida",
    preco: 20,
    foto_miniatura: {
      id: 21,
      url: require("./fotos_produtos_miniaturas/california_burger.jpg"),
      nome: "California Burger",
    },
    ativo: true,
    codigo: "feac6d6c-01fa-463b-9d78-32cf2c80704b",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "No oeste dos EUA, um hambúrguer 'Califórnia' geralmente consiste em um cheeseburger normal, com a adição de bacon e guacamole ou abacate. No leste dos EUA, o California Burger é tradicionalmente um hambúrguer com alface, tomate e cebola crua.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 21,
        url: require("./fotos_produtos_miniaturas/california_burger.jpg"),
        nome: 'california_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 22,
    nome: "Jucy Lucy cheeseburger",
    tipo: "Comida",
    preco: 13,
    foto_miniatura: {
      id: 22,
      url: require("./fotos_produtos_miniaturas/jucy_lucy_cheeseburger.JPG"),
      nome: "Jucy Lucy cheeseburger",
    },
    ativo: true,
    codigo: "fddad7c5-a7f4-46da-bdd1-80c943b8f9df",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Um cheeseburger que tem o queijo dentro do hambúrguer de carne e não no topo. Um pedaço de queijo é cercado por carne crua e cozido até derreter, resultando em um núcleo de queijo fundido dentro do hambúrguer.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 22,
        url: require("./fotos_produtos_miniaturas/jucy_lucy_cheeseburger.JPG"),
        nome: 'jucy_lucy_cheeseburger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 23,
    nome: "Patty Melt burger",
    tipo: "Comida",
    preco: 18,
    foto_miniatura: {
      id: 23,
      url: require("./fotos_produtos_miniaturas/patty_melt_burger.jpg"),
      nome: "Patty Melt burger",
    },
    ativo: true,
    codigo: "9d9715b9-a562-4691-90ab-8dc1c57d73de",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Sanduíche de hambúrguer composto por um hambúrguer de carne moída, pedaços de cebola salteada ou grelhada e Cheddar ou queijo suíço entre duas fatias de pão (tradicionalmente centeio, embora às vezes seja substituído).",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 23,
        url: require("./fotos_produtos_miniaturas/patty_melt_burger.jpg"),
        nome: 'patty_melt_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 24,
    nome: "Slopper burger",
    tipo: "Comida",
    preco: 27,
    foto_miniatura: {
      id: 24,
      url: require("./fotos_produtos_miniaturas/slopper_burger.jpg"),
      nome: "Slopper burger",
    },
    ativo: true,
    codigo: "e1ca6619-c9af-43cf-89dc-0be705ad4f1f",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Cheeseburger, ou hambúrguer servido aberto e envolto em chile vermelho ou chile verde (também conhecido como chile verde ou molho de chile verde). Sloppers geralmente incluem pães grelhados e muitas vezes são cobertos com cebolas frescas picadas. Comer um slopper não é tarefa fácil. O uso de garfo ou colher é essencial, mas recomenda-se a combinação de garfo e faca ou garfo e colher.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 24,
        url: require("./fotos_produtos_miniaturas/slopper_burger.jpg"),
        nome: 'slopper_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 25,
    nome: "Veggie burger",
    tipo: "Comida",
    preco: 33,
    foto_miniatura: {
      id: 25,
      url: require("./fotos_produtos_miniaturas/veggie_burger.jpg"),
      nome: "Veggie burger",
    },
    ativo: true,
    codigo: "3df04416-9223-49e7-8c8c-41b7b4c2c33c",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Hambúrguer vegetariano, hambúrguer de jardim ou hambúrguer de tofu usa um análogo de carne, um substituto de carne como tofu, proteína vegetal texturizada, seitan (glúten de trigo), Quorn, feijão, grãos ou uma variedade de vegetais, que são moídos e moldados em hambúrgueres.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 25,
        url: require("./fotos_produtos_miniaturas/veggie_burger.jpg"),
        nome: 'veggie_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 26,
    nome: "Kimchi burger",
    tipo: "Comida",
    preco: 31,
    foto_miniatura: {
      id: 26,
      url: require("./fotos_produtos_miniaturas/kimchi_burger.jpg"),
      nome: "Kimchi burger",
    },
    ativo: true,
    codigo: "3988dfa6-922f-4f64-bc75-1dfc3c581c2c",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Um hambúrguer que inclui kimchi em sua preparação",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 26,
        url: require("./fotos_produtos_miniaturas/kimchi_burger.jpg"),
        nome: 'kimchi_burger',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 27,
    nome: "Coca-cola 1,5l",
    tipo: "Bebida",
    preco: 4.5,
    foto_miniatura: {
      id: 27,
      url: require("./fotos_produtos_miniaturas/coca_cola_1_5l.JPG"),
      nome: "Coca-cola 1,5l",
    },
    ativo: true,
    codigo: "55d648e3-1c93-4f31-950b-dd5d88e3d95f",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 27,
        url: require("./fotos_produtos_miniaturas/coca_cola_1_5l.JPG"),
        nome: 'coca_cola_1_5l',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 28,
    nome: "Coca-cola 1l",
    tipo: "Bebida",
    preco: 4,
    foto_miniatura: {
      id: 28,
      url: require("./fotos_produtos_miniaturas/coca_cola_1l.JPG"),
      nome: "Coca-cola 1l",
    },
    ativo: true,
    codigo: "500acc0d-a444-43ef-b1b2-3965c40e5596",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 28,
        url: require("./fotos_produtos_miniaturas/coca_cola_1l.JPG"),
        nome: 'coca_cola_1l',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 29,
    nome: "Coca-cola 2,5l",
    tipo: "Bebida",
    preco: 6,
    foto_miniatura: {
      id: 29,
      url: require("./fotos_produtos_miniaturas/coca_cola_2_5l.JPG"),
      nome: "Coca-cola 2,5l",
    },
    ativo: true,
    codigo: "76a6eb62-2744-4bc9-ad12-3b25b3300265",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 29,
        url: require("./fotos_produtos_miniaturas/coca_cola_2_5l.JPG"),
        nome: 'coca_cola_2_5l',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 30,
    nome: "Coca-cola 200ml",
    tipo: "Bebida",
    preco: 2,
    foto_miniatura: {
      id: 30,
      url: require("./fotos_produtos_miniaturas/coca_cola_200ml.JPG"),
      nome: "Coca-cola 200ml",
    },
    ativo: true,
    codigo: "626f2c5f-2b8f-4b01-ae2c-589c267e7fc5",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 30,
        url: require("./fotos_produtos_miniaturas/coca_cola_200ml.JPG"),
        nome: 'coca_cola_200ml',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 31,
    nome: "Coca-cola 220ml",
    tipo: "Bebida",
    preco: 2.5,
    foto_miniatura: {
      id: 31,
      url: require("./fotos_produtos_miniaturas/coca_cola_220ml.JPG"),
      nome: "Coca-cola 220ml",
    },
    ativo: true,
    codigo: "3dd3761a-d888-4905-825e-0b31aac0cafe",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 31,
        url: require("./fotos_produtos_miniaturas/coca_cola_220ml.JPG"),
        nome: 'coca_cola_220ml',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 32,
    nome: "Coca-cola 2l",
    tipo: "Bebida",
    preco: 5,
    foto_miniatura: {
      id: 32,
      url: require("./fotos_produtos_miniaturas/coca_cola_2l.JPG"),
      nome: "Coca-cola 2l",
    },
    ativo: true,
    codigo: "392eed80-3b5e-4373-91d9-d66fed93bb6b",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 32,
        url: require("./fotos_produtos_miniaturas/coca_cola_2l.JPG"),
        nome: 'coca_cola_2l',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 33,
    nome: "Coca-cola 350ml",
    tipo: "Bebida",
    preco: 3,
    foto_miniatura: {
      id: 33,
      url: require("./fotos_produtos_miniaturas/coca_cola_350ml.JPG"),
      nome: "Coca-cola 350ml",
    },
    ativo: true,
    codigo: "96ce12cd-b430-47e8-b4f4-ca11900bf9fe",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 33,
        url: require("./fotos_produtos_miniaturas/coca_cola_350ml.JPG"),
        nome: 'coca_cola_350ml',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 34,
    nome: "Coca-cola 3l",
    tipo: "Bebida",
    preco: 7,
    foto_miniatura: {
      id: 34,
      url: require("./fotos_produtos_miniaturas/coca_cola_3l.JPG"),
      nome: "Coca-cola 3l",
    },
    ativo: true,
    codigo: "635a2f6d-3ff3-4b31-af91-eff6f76f35f7",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 34,
        url: require("./fotos_produtos_miniaturas/coca_cola_3l.JPG"),
        nome: 'coca_cola_3l',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 35,
    nome: "Coca-cola 600ml",
    tipo: "Bebida",
    preco: 3.5,
    foto_miniatura: {
      id: 35,
      url: require("./fotos_produtos_miniaturas/coca_cola_600ml.JPG"),
      nome: "Coca-cola 600ml",
    },
    ativo: true,
    codigo: "7ef10fab-b97b-44c8-83c7-d02458053748",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 35,
        url: require("./fotos_produtos_miniaturas/coca_cola_600ml.JPG"),
        nome: 'coca_cola_600ml',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
  {
    id: 36,
    nome: "Coca-cola 600ml",
    tipo: "Bebida",
    preco: 3.5,
    foto_miniatura: {
      id: 36,
      url: '',
      nome: "Coca-cola 600ml",
    },
    ativo: true,
    codigo: "c5ed0d01-3b4f-4398-9cfe-e0b27263c1af",
    data_cadastro: new Date(),
    data_modificacao_cadastro: new Date(),
    descricao: "Coca-Cola, ou Coca-Cola, é um refrigerante carbonatado fabricado pela Coca-Cola Company.",
    empresaId: 1,
    quantidade: 10,
    unidade_quantidade: "unidade(s)",
    fotos_galeria: [
      {
        id: 36,
        url: '',
        nome: 'coca_cola_600ml',
      }
    ],
    ingredientes: [
      pao, hamburguer, queijo
    ],
    ingredientes_opcionais: [
      hamburguer, queijo
    ],
    ingredientes_removiveis: [
      hamburguer, queijo
    ],
  },
];
