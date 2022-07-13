import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface UsuarioLogin {
  id: number | string;
  nome: string;
  email: string;
}

export const dados_iniciais_usuario: UsuarioLogin = {
  id: "",
  nome: "",
  email: ""
};

export interface CarrinhoComprasProduto {
  id: string;
  fotoMiniaturaUrl: string;
  nome: string;
  preço: number;
  quantidade: number;
}

interface UsuarioContextProps {
  dataUsuarioLogin: UsuarioLogin;
  setDataUsuarioLogin: Dispatch<SetStateAction<UsuarioLogin>>
  dataCarrinho: CarrinhoComprasProduto[];
  setDataCarrinho: Dispatch<SetStateAction<CarrinhoComprasProduto[]>>
}

export const UsuarioContext = createContext({} as UsuarioContextProps);

interface UsuarioContextProviderProps {
  children: ReactNode;
}

export function UsuarioContextProvider(props: UsuarioContextProviderProps) {
  const [dataUsuarioLogin, setDataUsuarioLogin] = useState<UsuarioLogin>(dados_iniciais_usuario);
  const [dataCarrinho, setDataCarrinho] = useState<CarrinhoComprasProduto[]>([]);

  return (
    <UsuarioContext.Provider value={{
      dataUsuarioLogin,
      setDataUsuarioLogin,
      dataCarrinho,
      setDataCarrinho
    }}>
      {props.children}
    </UsuarioContext.Provider>
  );
}
