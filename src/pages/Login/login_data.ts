import { format } from "date-fns";

export const login_data: ClienteTypes[] = [
  {
    nome: "Jeca da Silva",
    email: "jeca@email.com",
    senha: "0123456789",
    confirmacao_senha: "0123456789",
    rua: "Rua do centro",
    numero: "99",
    complemento: "Casa",
    bairro: "Centro",
    cidade: "Cachoeira Paulista",
    estado: "São Paulo",
    // cep: "12630000",
    cep: "12345678",
    telefone: "1233506877",
    id: "1",
    data_cadastro: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
    data_modificacao_cadastro: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
    empresaId: "1",
  }
];