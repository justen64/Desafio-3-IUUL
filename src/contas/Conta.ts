import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
  protected numero: string;
  protected debitos: Debito[] = [];
  protected creditos: Credito[] = [];

  constructor(numero: string) {
    this.numero = numero;
  }

  depositar(valor: number): void {
    const creditado = new Credito(valor, new Date());
    this.creditos.push(creditado);
  }

  sacar(valor: number): void {
    if(valor <= 0){
        throw new Error('Valor do saque deve ser maior que zero');
    }
    const saldoAtual = this.calcularSaldo();
    if (valor > saldoAtual) {
        throw new Error("Saldo insuficiente para realizar saque");  
    } else {
      const debitado = new Debito(valor, new Date());
      this.debitos.push(debitado);
    }
  }


  abstract calcularSaldo(): number
    
  
}
