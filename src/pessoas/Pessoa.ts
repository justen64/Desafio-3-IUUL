
 export abstract class Pessoa {
    private cpf: string;
    private nome: string;
    private telefone: String;
    
constructor(cpf: string,  nome: string, telefone: string){
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
}

 public getNome(): string{
    return this.nome
 }

}