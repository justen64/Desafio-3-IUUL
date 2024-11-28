import { Cliente } from "../pessoas/cliente";
import { Endereco } from "../pessoas/Endereco";


const cliente1 = new Cliente('456.789.123-00', 'Mariana', '99988-9999', true, []);
const cliente2 = new Cliente('789.123.456-00', 'José', '88888-8888', true, []);

cliente1.adicionarEndereco(new Endereco('12345-678', 'Rua A', '100', 'Apto 1', 'São Paulo', 'SP'));
cliente1.adicionarEndereco(new Endereco('98765-432', 'Rua B', '200', 'Casa', 'Rio de Janeiro', 'RJ'));
cliente1.adicionarEndereco(new Endereco('11223-445', 'Rua C', '300', 'Casa', 'Belo Horizonte', 'MG'));

cliente2.adicionarEndereco(new Endereco('11223-445', 'Rua C', '300', 'Casa', 'Belo Horizonte', 'MG'));
cliente2.adicionarEndereco(new Endereco('66778-990', 'Rua D', '400', 'Apto 2', 'Curitiba', 'PR'));

console.log(`Endereços do(a) cliente ${cliente1.getNome()}:`);
cliente1.listarEnderecos();

console.log(`Endereços do(a) cliente ${cliente2.getNome()}:`);
cliente2.listarEnderecos();