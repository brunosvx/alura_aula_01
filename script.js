
const botao = document.querySelector('button')

botao.onclick = () => {
  
  var valorEmDolar = Number(document.querySelector('input').value.replace(',','.'))
  
  document.querySelector('h2').innerHTML = 'R$ '+(valorEmDolar * 3.5).toFixed(2)
  
}