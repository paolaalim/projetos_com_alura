import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao>{

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    public static criaDe (dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g 
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get data():Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
    
    public paraTexto():string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }

    public eIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }

}