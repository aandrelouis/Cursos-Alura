import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(150);


const ContaPoupancaRicardo = new ContaPoupanca(500, cliente1, 1001);
ContaPoupancaRicardo.sacar(150);

console.log(ContaPoupancaRicardo);
console.log(contaCorrenteRicardo);