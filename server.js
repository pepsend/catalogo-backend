// 1. Importar la herramienta Express.
const express = require('express');
const app = express();

// --- NUEVO: Un "traductor" universal para datos ---
// Esta línea le permite a nuestro servidor entender datos en formato JSON.
app.use(express.json());

// 2. Definir el puerto. Render lo gestionará automáticamente, pero es bueno tenerlo.
const PORT = process.env.PORT || 3000;

// --- NUEVO: Nuestra primera "Base de Datos" temporal ---
// Por ahora, nuestros juegos vivirán aquí, dentro del propio servidor.
// Más adelante, los haremos persistentes.
let juegos = [
    {
        id: 1,
        nombre: 'Cyberpunk 2077',
        precio: '$29.990',
        portada: 'https://ejemplo.com/portada-cyberpunk.jpg'
    },
    {
        id: 2,
        nombre: 'The Witcher 3: Wild Hunt',
        precio: '$19.990',
        portada: 'https://ejemplo.com/portada-witcher3.jpg'
    },
    {
        id: 3,
        nombre: 'Red Dead Redemption 2',
        precio: '$34.990',
        portada: 'https://ejemplo.com/portada-rdr2.jpg'
    }
];

// --- RUTA ORIGINAL: La hemos mantenido para pruebas ---
app.get('/', (req, res) => {
  res.send('¡El servidor para Pepsend Ofertas funciona!');
});

// --- ¡NUEVA RUTA DE API! ---
// Esto crea una nueva URL: /api/juegos
// Cuando alguien la visita, el servidor ejecuta esta función.
app.get('/api/juegos', (req, res) => {
  // La respuesta es simple: enviamos la lista completa de juegos en formato JSON.
  res.json(juegos);
});

// 5. Poner el servidor a escuchar.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
