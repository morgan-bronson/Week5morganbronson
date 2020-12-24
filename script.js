'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  let D = 0
  let R = 0
  const PI = 3.14159265359
  let A = 0
  let C = 0
  D = document.getElementById('d').value
  R = parseFloat(D) / 2
  A = PI * (R * R)
  alert(A)
  C = 2 * PI * R
  alert(C)
}
