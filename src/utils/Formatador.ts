import { format } from "date-fns";

export class Formatador {
  static FormataValorMonetario(valor: number): string {
    return `R$ ${Number(valor).toFixed(2).replace(".", ",")}`;
  }

  static FormataCep(valor: string): string {
    return valor.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

  /*
    1231014087
    1231014087 => 10
    (12)31014087
    (12)3101-4087

    12991746339
    12991746339 => 11
    (12)991746339
    (12)99174-6339
  */
 
  static FormataTelefone(valor: string): string {
    if (valor.length === 10) {
      return valor.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    } else if (valor.length === 11) {
      return valor.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
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