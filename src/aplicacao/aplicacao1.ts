import { Cargo } from "../pessoas/Cargo";
import { Funcionario } from "../pessoas/Funcionario";


const gerenteCargo = new Cargo("Gerente");
const atendenteCargo = new Cargo("Atendente");

const gerente = new Funcionario("12345678900", "João", "11999999999", 5000, gerenteCargo);
const atendente = new Funcionario("09876543211", "Maria", "11988888888", 2500, atendenteCargo);

console.log(`${gerente.getNome()} é um ${gerente.getCargo().getNomeCargo()}`);
console.log(`${atendente.getNome()} é um ${atendente.getCargo().getNomeCargo()}`);
