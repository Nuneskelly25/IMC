const calcular = document.querySelector('#calcular')


function IMC(){
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const result = document.querySelector('#resultado')


    if(nome!=''&& altura!= '' && peso!=''){
       const valorImc = (peso/(altura * altura)).toFixed(2)

      let classificacao= ''
        
       if(valorImc < 18.5){
        classificacao = 'Abaixo do peso'
       }else if( valorImc < 25){
        classificacao = 'COm o peso ideal.Parabéns!'
       }else if(valorImc < 30){
        classificacao = 'Levemente acima do peso'
       }else if(valorImc < 35){
        classificacao = 'Com obesidade Grau I'
       }else if(valorImc < 40){
        classificacao = 'Com obesidade Grau II (Severa)'
       }else{
        classificacao = 'Com obesidade Grau III (Mórbida)'
       }

     result.textContent=`${nome} seu IMC é: ${valorImc}! E você está ${classificacao}`

    }else{
        result.textContent='Por favor! Preencha todos os campos.'
    }
}


calcular.addEventListener('click',IMC)