import { ContaCorrente } from "../contas/contaCorrente";
import { Cliente } from "../pessoas/cliente";



const contaCorrente1 = new ContaCorrente('0004-4', 100);
contaCorrente1.depositar(300);


const cliente1 = new Cliente('111.222.333-00', 'Joana', '55555-5555', true, [contaCorrente1]);

const contaCorrente2 = new ContaCorrente('0005-5', 0);
contaCorrente2.depositar(100);

const cliente2 = new Cliente('444.555.666-00', 'Marcos', '44444-4444', true, [contaCorrente2]);

try {
    contaCorrente1.transferir(contaCorrente2, 1000);
} catch (error) {
    console.error('Erro ao transferir:', error.message);
}

console.log('Saldo da conta corrente 1:', contaCorrente1.calcularSaldo());
console.log('Saldo da conta corrente 2:', contaCorrente2.calcularSaldo());
