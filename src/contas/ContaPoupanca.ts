import { Conta } from "./conta";

export class ContaPoupanca extends Conta{
    
    constructor(numero: string){
        super(numero);
    }

    public calcularSaldo(): number {
        const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos;
      }
}