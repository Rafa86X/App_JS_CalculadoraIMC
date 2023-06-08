

const nome = document.querySelector('[data-tipo="nome"]')
const peso = document.querySelector('[data-tipo="peso"]')
const altura = document.querySelector('[data-tipo="altura"]')
const botao = document.querySelector('[data-tipo="botao"]')
const avaliacao = document.querySelector('[data-tipo="avaliacao"]')




const botaoCalcula = botao.addEventListener('click', (evento) => {
    evento.preventDefault()


    if(nome.value !== '' && peso.value !=='' && altura.value !==''){
      const imc = ((peso.value)/(altura.value*altura.value)).toFixed(2)
      return analizador(imc)
    }
    else{
      const conteudo = `<p class="avaliacao_p">Preencha todos os campos</p>`
      avaliacao.innerHTML = conteudo
    }

  })



  function analizador(a){
      const nome_v = nome.value
       let frase1 = `Ola ${nome_v}, seu IMC é de: `
       let frase2 = " "
      if(a<18.5){
        frase2 = " , seu estado é de magreza e merece atenção, procure um medico."
      }
      if((a>=18.5)&&(a<24.9)){
        frase2 = " , seu peso é normal para sua altura, continue assim!"
      }
      if((a>=25)&&(a<29.9)){
        frase2 = " , você esta com sobrepeso, procure se alimentar melhor e fazer exercicios."
      }
      if((a>=30)&&(a<39.9)){
        frase2 = " , você esta com obesidade nivel 2, procure um médico"
      }
      if(a>=40){
        frase2 = " , você esta com obesidade nivel 3, ou seja, obesidade morbida. Procure um tratamento médico imediatamanete!!"
      }


      const conteudo = `<p class="avaliacao_p">${frase1}${a}${frase2}</p>`
      avaliacao.innerHTML = conteudo
  }


