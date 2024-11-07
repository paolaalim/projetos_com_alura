import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    
    @escapar
    protected template(model: Negociacoes): string {
        return ` 
                                        
        <table class="tablet table-hover table-bordered">
            <thead>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>        
            </thead> 
                                      
            <tbody>
                ${model.lista().map(negociacao =>{
                    return `
                     <tr>   
                        <td>${this.formataData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
                }).join('')}                   
            </tbody>  
                                     
        </table>
              
        `;
    }

    private formataData(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
}
