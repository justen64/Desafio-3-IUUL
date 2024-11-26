import { Conta } from "./conta";

class ContaPoupanca extends Conta{
    
    constructor(numero: string){
        super(numero);
    }

    calcularSaldo(): number {
        const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos;
      }
}