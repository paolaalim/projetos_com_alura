import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";

export  abstract class View <T>{

    protected elemento: HTMLElement;

    constructor(seletor: string){
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement ;
        }else {
            throw Error("Seletor não existe no DOM. Verifique")
        }
    }

    protected abstract template(model: T): string;
    
    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
        
    }
}