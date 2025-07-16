// 1. Importar las herramientas que necesitamos.
const express = require('express');
const cors = require('cors'); // ¡LA NUEVA HERRAMIENTA!

const app = express();

// --- ¡LA LÍNEA MÁGICA! ---
// Esto le dice a nuestro servidor que use la herramienta 'cors'.
// Ahora dará permiso a otros dominios para que le pidan datos.
app.use(cors());

// Esta línea le permite a nuestro servidor entender datos en formato JSON.
app.use(express.json());

// 2. Definir el puerto.
const PORT = process.env.PORT || 3000;

// 3. Nuestra "Base de Datos" temporal.
let juegos = [
    {
        id: 1,
        nombre: 'Cyberpunk 2077',
        precio: '$29.990',
        portada: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/12/cyberpunk-2077-analisis-2156931.jpg'
    },
    {
        id: 2,
        nombre: 'The Witcher 3: Wild Hunt',
        precio: '$19.990',
        portada: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/itbAQ5K6x1aE4aA4qfUSY22z.jpg'
    },
    {
        id: 3,
        nombre: 'Red Dead Redemption 2',
        precio: '$34.990',
        portada: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LBB9hHi2C3BJSutgS2g9fG2z.jpg'
    }
];

// 4. Nuestras rutas de API.
app.get('/', (req, res) => {
  res.send('¡El servidor para Pepsend Ofertas funciona y ahora tiene CORS habilitado!');
});

app.get('/api/juegos', (req, res) => {
  res.json(juegos);
});

// 5. Poner el servidor a escuchar.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
