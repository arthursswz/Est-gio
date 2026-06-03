interface meu_carro {
    marca:string;
     ano:number;
    flex:boolean;
}

const mycar:meu_carro={
    marca :"fiat",
    ano:2006,
    flex:false

}

// Você precisa dizer de onde está vindo a propriedade usando o ponto (.)
console.log(`meu carro é ${mycar.marca}, o ano dele é ${mycar.ano}, ele é flex? ${mycar.flex}`);
