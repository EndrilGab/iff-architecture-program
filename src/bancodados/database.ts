import sqlite3 from 'sqlite3';

// Abre uma conexão com o banco de dados SQLite (cria um novo banco de dados se não existir)
const db = new sqlite3.Database('database.db');

// Cria a tabela de usuários se ela não existir
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
)`);

export default db;
