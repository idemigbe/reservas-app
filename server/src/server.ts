import express from 'express';
import cors from 'cors';
import db from './db';
import reservationsRoutes from './routes/reservations';
import usersRoutes from './routes/users';

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/reservations', reservationsRoutes);
app.use('/api/users', usersRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Reservas funcionando');
});

// Verificación simple de conexión
db.query('SELECT 1 + 1 AS solution', (err) => {
    if (err) {
        console.error('❌ Error al verificar MySQL:', err.message);
        return;
    }
    console.log('✔️ Prueba de conexión a MySQL exitosa');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});