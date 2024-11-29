const { Pool } = require('pg'); // Importa el módulo pg para PostgreSQL

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_base_de_datos_usuario',
    password: 'admin',
    port: 5432
});

// Función para conectar a PostgreSQL
const conectarBDPostgres = async () => {
    try {
        const client = await pool.connect(); // Conecta a la base de datos y obtiene un cliente
        console.log('Conexión exitosa a PostgreSQL');
        client.release(); // Libera el cliente después de la conexión exitosa
    } catch (error) {
        console.error('Error al conectar a PostgreSQL:', error.message);
    }
};

module.exports = { conectarBDPostgres, pool }; // Exporta la función y el pool
