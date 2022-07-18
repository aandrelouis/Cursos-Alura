//import { Cliente} from './Cliente.js';


export class ContaCorrente{
    agencia;
    _cliente;
    _saldo =1000;
    conta;
    static quantContas =0;

    constructor(agencia, conta, cliente){
        this.agencia = agencia;
        this.conta = conta;
        this._cliente = cliente;
        ContaCorrente.quantcontas++;
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }
    
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor){
       if(valor > 0){
           this._saldo += valor;
           return true;
       }
    }

    getSaldo(){
        return this._saldo;
    }
    
    trasnferir(valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        if(valorSacado){
        conta.depositar(valor);
         return true;
        }
    }

}