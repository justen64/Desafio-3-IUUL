import { ContaCorrente } from "../contas/contaCorrente";
import { Cliente } from "../pessoas/cliente";



const contaCorrente = new ContaCorrente('0001-1', 500);


const cliente = new Cliente('789.123.456-00', 'José', '88888-8888', true, [contaCorrente]);


contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);

contaCorrente.sacar(50);


console.log('Saldo da conta corrente:', contaCorrente.calcularSaldo());
