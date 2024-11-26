import { Cargo } from "./Cargo";
import { IUsuario } from "./IUsuario";
import { Pessoa } from "./pessoa";

class Funcionario extends Pessoa implements IUsuario{
    private cargo: Cargo;
    private salario: number;

    constructor(cpf: string, nome: string, telefone: string, salario:number){
        super(cpf, nome, telefone)
        this.salario = salario;
    }

    autenticar(): boolean {
        return true;
    }
}