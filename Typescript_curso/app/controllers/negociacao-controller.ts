import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasdaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../service/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-views.js";

export class NegociacaoController{
    
    @domInjector('#data')
    private inputData:HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade:HTMLInputElement;
    @domInjector('#valor')
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('mensagemView');
    private negociacoesService = new NegociacoesService();
    
    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }

    private eDiaUtil(data: Date): boolean{
        return data.getDay() > DiasdaSemana.DOMINGO && data.getDay() < DiasdaSemana.SABADO
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView (): void{
        this.mensagemView.update('Negociação adicionada com sucesso');
        this.negociacoesView.update(this.negociacoes);

    }

    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.eDiaUtil(negociacao.data)) {
            this.mensagemView.update('São aceitas apenas negociações em dias úteis')
            return;
        }
        this.negociacoes.adicionaNegociacao(negociacao);
        imprimir(negociacao);
        this.limpaFormulario();
        this.atualizaView();   
        
    }

    public importaDados(): void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje => {
                    return !this.negociacoes.lista()
                        .some(negociacao => negociacao
                            .eIgual(negociacaoDeHoje)
                        );
                });
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adicionaNegociacao(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    

    

}