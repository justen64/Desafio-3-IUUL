import { Cargo } from "./Cargo";
import { Pessoa } from "./pessoa";
import { IUsuario } from "./IUsuario";


export class Funcionario extends Pessoa implements IUsuario {
  private cargo: Cargo;
  private salario: number;

  constructor(cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo) {
    super(cpf, nome, telefone);
    this.salario = salario;
    this.cargo = cargo;
  }

  public autenticar(): boolean {
    return true;
  }

  public getCargo(): Cargo{
    return this.cargo;
  }
}
