import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente,agencia){
       super(0,cliente,agencia); //vai chamar o construtor da classe pai
        ContaCorrente.numeroDeContas += 1;
    }

    teste(){
       super.teste(); //referencia a classe pai
    }

    sacar(valor){
        let taxa = 1.15;

        return this._sacar(valor, taxa);
    }
}
