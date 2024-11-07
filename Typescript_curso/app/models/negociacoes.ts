import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../interfaces/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes>{
    
    private negociacoes: Array<Negociacao> = [];

    public adicionaNegociacao(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public paraTexto():string{
        return JSON.stringify(this.negociacoes, null, 2)
    }
    
    public eIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}

