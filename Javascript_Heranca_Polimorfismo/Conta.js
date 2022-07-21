export class Conta {
    constructor(saldoinicial,cliente,agencia){
        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    
    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
        
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