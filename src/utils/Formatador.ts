import { format } from "date-fns";

export class Formatador {
  static FormataValorMonetario(valor: number): string {
    return `R$ ${Number(valor).toFixed(2).replace(".", ",")}`;
  }

  static FormataCep(valor: string): string {
    let primeira_parte = valor.substring(0, 4);
    let segunda_parte = valor.substring(5, 7);
    return `${primeira_parte}-${segunda_parte}`;
  }

  /*
    (12)3101-4087
    (12)99174-6339
    1231014087 => 10
    12991746339 => 11
  */
  static FormataTelefone(valor: string): string {
    if (valor.length === 10) {
      let primeira_parte = valor.substring(0, 1);
      let segunda_parte = valor.substring(2, 5);
      let terceira_parte = valor.substring(6, 9);
      return `(${primeira_parte}) ${segunda_parte}-${terceira_parte}`;
    }
    if (valor.length === 11) {
      let primeira_parte = valor.substring(0, 1);
      let segunda_parte = valor.substring(2, 6);
      let terceira_parte = valor.substring(7, 10);
      return `(${primeira_parte}) ${segunda_parte}-${terceira_parte}`;
    }
    return valor;
  }

  static FormataExibicaoSenha(senha: string, tamanho_string?: number): string {
    let valida_tamanho_string = (tamanho_string !== undefined) ? tamanho_string : 10;
    let resultado = senha
      .replaceAll(/[0-9a-zA-Z]/g, '*')
      .slice(0, valida_tamanho_string);
    return resultado;
  }

  static FormatadorDataHora(data: string | number | Date, formato: DataHoraFormatos) {
    let resultado = format(new Date(data), formato);
    return resultado;
  }

  static ValidaStatusRefeicao(valor: boolean) {
    const ATIVO = 'Ativo';
    const INATIVO = 'Inativo';

    let resultado = (valor) ? ATIVO : INATIVO;
    return resultado;
  }
}