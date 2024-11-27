import { Conta } from '../contas/conta';
import {IUsuario} from './IUsuario';
import { Endereco } from './endereco';
import { Pessoa } from './pessoa';


export class Cliente extends Pessoa implements IUsuario {

    private enderecos: Endereco[] = [];
    private conta: Conta[] = [];
    private vip: boolean = false;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, conta: Conta[]) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.conta = conta;
    }

    public autenticar(): boolean {
        return true;
    }

    public adicionarEndereco(endereco: Endereco): void{
        this.enderecos.push(endereco);
    }

    public listarEnderecos(): void {
        const enderecos = this.getEnderecos();
        
        if (enderecos.length === 0) {
            console.log("Este cliente não possui endereços cadastrados.");
            return;
        }

        enderecos.forEach((endereco) => {
            console.log(`Endereço ${endereco.toString()}:`);
        });
    }

    public getEnderecos(): Endereco[]{
        return this.enderecos;
    }

    public getConta(): Conta[] {
        return this.conta;
    }
}