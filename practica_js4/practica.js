let num;
// Este código utiliza un bucle while para solicitar al usuario un número entero positivo y asegurarse de que el dato introducido es válido. Si el usuario introduce un valor no numérico o negativo, se muestra un mensaje de error y se vuelve a pedir el número.
while (isNaN(num) || num <= 0) {
  num = prompt("Por favor, introduce un número entero positivo:");
  
  if (isNaN(num) || num <= 0) {
    alert("Debes introducir un número entero positivo.");
  }
}

let fib = [0, 1];
// se utiliza un bucle for para calcular los siguientes números de la serie de Fibonacci y guardarlos en el array fib
for (let i = 2; i < num; i++) {
  fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib);
