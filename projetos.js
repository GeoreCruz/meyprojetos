
//Projeto 01

let total = 0;



  function adicionar() {
    
   
    let notas = document.querySelector(".formNotas");
    notas = parseFloat(notas.value);
    let resultado = document.querySelector(".resultado");
  
    if (!isNaN(notas) && notas <= 10 && notas <= 10 && notas > 0) {
      total += notas;
      resultado.innerHTML = `Total: ${total}`;
    } else {
      resultado.innerHTML = "Error, Campo vaziu ou nota incorreta!";
    }
  
    let media = total / 2;
  
    let botao = document.querySelector(".btn1");
    let resMedia = document.querySelector(".resMedia");
    let infoMedia = document.querySelector(".infoMedia");
    botao.addEventListener("click", function () {
      resMedia.innerHTML = `A média é: ${media.toFixed(1)}`;
      if (media >= 7) {
        infoMedia.innerHTML = "Aprovado";
      } else if (media < 7) {
        infoMedia.innerHTML = "Recuperação";
      } else {
        infoMedia.innerHTML = "Reprovado";
      }
    });
    document.querySelector(".formNotas").value = "";
  
  
 
}



//Projeto 02
function imc () {
let nome = document.querySelector('.inp').value
let altura = document.querySelector('.altura').value
let peso = document.querySelector('.pes').value
let resultado = document.querySelector('.resu')
let clas = document.querySelector('.clas')

let valorAltura = Number(altura)
let valorPeso = Number(peso)


let imc = valorPeso / (valorAltura * valorAltura)

resultado.innerHTML = `${nome} O seu IMC é ${imc.toFixed(2)}`

if(imc > 40) {
clas.innerHTML = `Você tem Obesidade grau III`

} else if(imc > 35 && imc < 39.9) {
  clas.innerHTML = `Você tem Obesidade grau II`
} else if(imc > 30 && imc < 34.9) {
  clas.innerHTML = `Você tem Obesidade grau I`
} else if(imc > 25 && imc < 29.9) {
   clas.innerHTML = `Você esta com Sobrepeso`
} else if(imc > 18.6 && imc < 24.9) {
  clas.innerHTML = `está normal`
} else {
  clas.innerHTML = `Abaixo do normal`
}



document.querySelector('.inp').value = ""

document.querySelector('.altura').value = ""

document.querySelector('.pes').value = ""

}
//








