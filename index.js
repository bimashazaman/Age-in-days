// var age = document.getElementById('flex-box-result').innerHTML(ageInDays)

function ageInDays() {
  var birthyear = prompt('Enter your birth year')
  var ageInDays = (2021 - birthyear) * 365

  var h1 = document.createElement('h1')
  var textAnswer = document.createTextNode('you are ' + ageInDays + ' days old')
  h1.setAttribute('id', 'ageInDays')
  h1.appendChild(textAnswer)
  document.getElementById('h1').appendChild(h1)
}

function reset() {
  var reset = document.getElementById('ageInDays').remove()
}
