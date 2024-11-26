import { Conta } from '../contas/conta';
import {IUsuario} from './IUsuario';
import { Endereco } from './endereco';
import { Pessoa } from './pessoa';


class Cliente extends Pessoa implements IUsuario {

    private endereco: Endereco[] = [];
    private conta: Conta[] = [];
    private vip: boolean = false;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
    }

    autenticar(): boolean {
        return true;
    }

    listarEnderecos(): void{
        this.endereco.map((endereco)=>{
            console.log(endereco);
        })
    }
}