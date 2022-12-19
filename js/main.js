const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar") 


/*  Pegando todos os elementos com a classe .controle-ajuste*/
const controle = document.querySelectorAll("[data-controle]")

/*Interação dos elementos no Array controle  */
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{ 
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        console.log(evento.target.parentNode)

    })
})

/* Função Para Adicionar Dados Na Section Equipamentos*/
function manipulaDados(operacao, controle){
    
    const peca = controle.querySelector("[data-contador]")
    console.log(peca)

    if(operacao == "-"){
        peca.value=  parseInt(peca.value) - 1
    }
    else{
        peca.value =  parseInt(peca.value) + 1
    }
}
