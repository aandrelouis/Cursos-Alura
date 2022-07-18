import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente( "Louis", "343333211", "123.456.789-00");
const cliente2 = new Cliente( "João", "343333212", "123.456.789-00");
const cliente3 = new Cliente( "Maria", "343333213", "123.456.789-00");
const cliente4 = new Cliente( "Pedro", "343333214", "123.456.789-00");
const cliente5 = new Cliente( "José", "343333215", "123.456.789-00");
const cliente6 = new Cliente( "Carlos", "343333216", "123.456.789-00");
const cliente7 = new Cliente( "João", "343333217", "123.456.789-00");
const cliente8 = new Cliente( "Maria", "343333218", "123.456.789-00");
const cliente9 = new Cliente( "Pedro", "343333219", "123.456.789-00");
const cliente10 = new Cliente( "José", "343333220", "123.456.789-00");
const cliente11 = new Cliente( "Carlos", "343333221", "123.456.789-00");
const cliente12 = new Cliente( "João", "343333222", "123.456.789-00");



const cc1 = new ContaCorrente( "123", "12345", cliente1);
const cc2 = new ContaCorrente( "456", "54321", cliente2);
const cc3 = new ContaCorrente( "789", "98765", cliente3);
const cc4 = new ContaCorrente( "321", "32145", cliente4);
const cc5 = new ContaCorrente( "654", "65321", cliente5);
const cc6 = new ContaCorrente( "987", "87654", cliente6);
const cc7 = new ContaCorrente( "654", "65321", cliente7);
const cc8 = new ContaCorrente( "321", "32145", cliente8);
const cc9 = new ContaCorrente( "987", "87654", cliente9);

cc1.depositar(10000);
cc2.depositar(10000);
cc3.depositar(10000);
cc4.depositar(10000);
cc5.depositar(10000);
cc6.depositar(10000);


//contaCorrenteCar2.cliente = cliente2; //consigo fazer toda regra de proteção dentro dos getters and setters para essa variavel privada


cc1.trasnferir(400, cc2);
cc2.trasnferir(400, cc3);
cc3.trasnferir(400, cc4);
cc4.trasnferir(400, cc5);
cc5.trasnferir(400, cc6);

console.log(cc1.saldo);
console.log(cc2.saldo);
console.log(cc3.saldo);
console.log(cc4.saldo);
console.log(cc5.saldo);
