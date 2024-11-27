import { Conta } from "./conta";

export class ContaCorrente extends Conta {
  limite: number = 0;

  constructor(numero: string, limite: number) {
    super(numero);
    this.limite = limite;
  }

  public transferir(contaDestino: Conta, valor: number): void {
    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    const saldoDisponivel = this.calcularSaldo();
    if (valor > saldoDisponivel) {
      throw new Error("Saldo insuficiente para realizar a transferência");
    }

    this.sacar(valor);
    contaDestino.depositar(valor);
  }

  public calcularSaldo(): number {
    const totalCreditos = this.creditos.reduce(
      (total, credito) => total + credito.valor,
      0
    );
    const totalDebitos = this.debitos.reduce(
      (total, debito) => total + debito.valor,
      0
    );

    return totalCreditos - totalDebitos + this.limite;
  }
}
