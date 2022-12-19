const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar") 
const braco = document.querySelector("#braco")

/*  Pegando todos os elementos com a classe .controle-ajuste*/
const controle = document.querySelectorAll(".controle-ajuste")

/*Interação dos elementos no Array controle  */
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{ 
        manipulaDados(evento.target.textContent)
    })
})

/* Função Para Adicionar dados Na Section Equipamentos*/
function manipulaDados(operacao){   
    if(operacao == "-"){
        braco.value=  parseInt(braco.value) - 1
    }
    else{
        braco.value =  parseInt(braco.value) + 1
    }
}
