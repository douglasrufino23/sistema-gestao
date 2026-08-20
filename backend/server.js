const express = require('express');
const sqlite = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const db = new sqlite.Database('./sistema.db', (err) => {
    if (err) {
        console.error('Erro no banco: ', err.message)
    }

})

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        usuario TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        admin BOLEAN DEFAUL 'false'
        )`, (err) => {
        if (err) {
            console.error('Erro na tabela de usuários.')
        }

    }),

        db.run(`CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cod INTEGER NOT NULL UNIQUE,
        produto TEXT NOT NULL,
        quantidade integer NOT NULL,
        preco TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Erro na tabela de produtos.')
            }
        
        })
})

app.post('/estoque', (req, res) => {
    const { cod, produto, quantidade, preco } = req.body;
    const sql = 'INSERT INTO produtos (cod, produto, quantidade, preco) VALUES( ?, ?, ?, ?)'

    db.run(sql, [cod, produto, quantidade, preco], (err) => {
        if (err) {
            if (err.message.includes('UNIQUE')) {
                return res.status(409).json({ err: 'Produto já existe.' })
            }
            else {
                return res.status(500).json({ err: 'Erro ao cadastrar produto.' })
            }

            return res.status(201).json({ sucess: 'Produto adicionado com sucesso!' })


        }
    })

})



app.listen(3000)