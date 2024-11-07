export function templateDecorator(ParaParametros:boolean){
    return function (
        target: any,
        PropertyKey: string,
        descriptor: PropertyDescriptor
    ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
        const retorno = metodoOriginal.apply(this,args);
        return retorno;
    };

    return descriptor;
    }
}