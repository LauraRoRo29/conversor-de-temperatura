function convertirTemperatura() {
  let entrada = prompt("Ingresa la temperatura en grados Celsius:");

  // Verificar si la entrada es un número válido y no está vacía
  if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
    alert("Error: Por favor, ingresa un número válido.");
    return convertirTemperatura(); // Volver a solicitar los datos
  }

  // Convertir a número
  let celsius = Number(entrada);

  // Fórmulas de conversión
  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = celsius + 273.15;

  // Imprimir en la consola
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);

  // Mostrar en el DOM (en la página)
  let divResultado = document.getElementById("resultado");
  divResultado.innerHTML = `
    <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
    <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
  `;
}
