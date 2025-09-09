const { Pool } = require('pg')
const { DATABASE_URL } = require('./config')
const pool = new Pool({ connectionString: DATABASE_URL })
async function ping(){ const { rows } = await pool.query('SELECT 1 AS ok'); return rows[0].ok === 1 }
module.exports = { pool, ping }
