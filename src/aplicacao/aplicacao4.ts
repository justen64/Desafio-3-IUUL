import { ContaCorrente } from "../contas/contaCorrente";
import { ContaPoupanca } from "../contas/contaPoupanca";
import { Cliente } from "../pessoas/cliente";

const contaCorrente = new ContaCorrente('0002-2', 500);
contaCorrente.depositar(1000);

const cliente1 = new Cliente('321.654.987-00', 'Paulo', '77777-7777', true, [contaCorrente]);

const contaPoupanca = new ContaPoupanca('0003-3');
contaPoupanca.depositar(1000);

const cliente2 = new Cliente('654.321.987-00', 'Lucas', '66666-6666', true, [contaPoupanca]);

contaCorrente.transferir(contaPoupanca, 500);

console.log('Saldo da conta corrente:', contaCorrente.calcularSaldo());
console.log('Saldo da conta poupança:', contaPoupanca.calcularSaldo());