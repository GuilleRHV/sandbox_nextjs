// app/lib/api/db.ts
import { createPool } from '@vercel/postgres';

// Obtén la URL de conexión de las variables de entorno
const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('La variable de entorno POSTGRES_URL no está definida');
}

// Crea y exporta el pool de conexiones
const pool = createPool({
  connectionString,
});

export default pool;
