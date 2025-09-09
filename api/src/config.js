require('dotenv').config({ path: '../.env' })
const must = (v, name) => { if (!v) throw new Error(`Missing env: ${name}`); return v }
const DB_USER = must(process.env.APP_DB_USER, 'APP_DB_USER')
const DB_PASS = must(process.env.APP_DB_PASSWORD, 'APP_DB_PASSWORD')
const DB_HOST = process.env.APP_DB_HOST || 'localhost'
const DB_PORT = process.env.APP_DB_PORT || '5432'
const DB_NAME = process.env.APP_DB_NAME || 'icore'
const DATABASE_URL = `postgres://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASS)}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const PORT = Number(process.env.PORT ?? 3000)
module.exports = { DATABASE_URL, PORT }
