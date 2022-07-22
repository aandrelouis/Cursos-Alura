//ser autentivael significa que tem um metodo de autenticacao

//ducky type - ele é presente em linguagues fracamente tipadas (Se anda como pato, faz baurulho como pato, ele é um pato)
// Se ele tema propriedade que eu quero usar eu posso usar ele

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);

        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}