//Classe abstrata - não pode ser instanciada
//Mas pode ser herdada
export class Conta {
    constructor(saldoinicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Não é possível instanciar um objeto da classe Conta");
        }
        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    //metodo abstrato
    sacar(valor){
        throw new Error("Metodo abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa*valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
    
}