import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {Funcionario} from "./Funcionario/Funcionario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor = new Diretor("Rodrigo", 10000, "123.456.789-00");
diretor.CadastrarSenha("123");

const gerente = new Gerente("João", 5000, "987.654.321-00");
gerente.CadastrarSenha("12222");

const logado = SistemaAutenticacao.login(diretor, "123");
console.log(logado);

const logado2 = SistemaAutenticacao.login(gerente, "12222");
console.log(logado2);

const cliente = new Cliente("João", "123.456.789-00", "3342");

const logado3 = SistemaAutenticacao.login(cliente, "3342");
console.log(logado3);