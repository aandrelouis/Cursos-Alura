export class Cliente{
    nome;
    _cpf;
    rg;

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this.rg = rg;
    }

    get nome(){
        return this._nome;
    }

    set nome(valor){
        this._nome = valor;
    }

    get cpf(){
        return this._cpf;
    }

}