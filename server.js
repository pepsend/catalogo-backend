// 1. Importar la herramienta (Express) que acabamos de instalar.
const express = require('express');

// 2. Crear nuestra aplicación de servidor.
const app = express();

// 3. Definir el "puerto" por el que nuestro servidor escuchará. 
// Es como el número de un muelle en un puerto. Usamos 3000 por convención.
const PORT = 3000;

// 4. Definir una "ruta". Esto le dice al servidor qué hacer cuando alguien visita la página principal ('/').
app.get('/', (req, res) => {
  // Cuando alguien visita, le enviamos como respuesta el texto "El servidor funciona!".
  res.send('¡El nuevo servidor para Pepsend Ofertas funciona!');
});

// 5. Poner el servidor a escuchar en el puerto que definimos.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
