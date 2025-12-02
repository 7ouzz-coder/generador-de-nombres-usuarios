// Leer datos desde el usuario
const nombreInput= prompt("Ingresa un nombre:");
const apellidoInput= prompt("Ingresa un apellido:");

// Extraer las partes solicitadas
const inicialNombre= nombreInput.slice(0,1).toLowerCase();
const TresPrimerasLetrasApellido= apellidoInput.slice(0,3).toLowerCase();

// Generar numero aleatorio entre 10 y 99
const numeroAleatorio= Math.floor(Math.random() * 90) + 10;

// Guardar nombre de usuario generado y nombre completo
const nombreCompleto= `${nombreInput} ${apellidoInput}`;
const usuarioGenerado= `${inicialNombre}${TresPrimerasLetrasApellido}${numeroAleatorio}`;

// Obtener elemento ul del DOM
const nombreCompletoElement= document.getElementById("nombre-completo");
const usuarioGeneradoElement= document.getElementById("usuario-generado");

// Mostrar resultados en el DOM
nombreCompletoElement.innerHTML= `Nombre completo: ${nombreCompleto}`;
usuarioGeneradoElement.innerHTML= `Nombre de usuario generado: ${usuarioGenerado}`;

// Mostrar resultados en consola
console.log(`--- Este es tu nuevo nombre de usuario ---\n`);
console.log(`${usuarioGenerado}`);
console.log(`\nGracias por usar nuestro generador de nombres de usuario. ¡Hasta luego, ${nombreCompleto}!`);