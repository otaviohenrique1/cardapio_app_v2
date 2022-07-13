import { ReactNode } from "react";
import { UsuarioContextProvider } from "./usuario";

interface GlobalContextProps {
  children: ReactNode;
}

export default function GlobalContext(props: GlobalContextProps) {
  const { children } = props;

  return (
    <UsuarioContextProvider>{children}</UsuarioContextProvider>
  )
}
