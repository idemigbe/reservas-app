import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Añade tu contraseña si existe
    database: 'reservas_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: '+00:00', // Importante para MariaDB
    charset: 'utf8mb4_unicode_ci' // Coincide con tu collation
});

// Verificación de conexión
pool.getConnection()
    .then(conn => {
        console.log('✅ Connected to MariaDB!');
        conn.release();
    })
    .catch(err => {
        console.error('❌ Database connection failed:', err.message);
        process.exit(1);
    });

export default pool;