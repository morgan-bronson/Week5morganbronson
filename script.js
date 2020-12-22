'use strict'

document.getElementById('mybtn').addEventListener('click', calculatearea)

function calculatearea () {
  let D = 0
  let R = 0
  let PI = 3.14159265359
  let A = 0
  let C = 0
  D = document.getElementById('D').value
  R = document.getElementById('R').value
  PI = document.getElementById('PI').value
  A = document.getElementById('A').value
  C = document.getElementById('C').value
  R = parseFloat(D) / 2
  A = (parseFloat(R) ^ 2) * parseFloat(PI)
  alert(A)
  C = (2 * parseFloat(PI)) * parseFloat(R)
}
