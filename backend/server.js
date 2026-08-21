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

app.post('/estoque/adicionar', (req, res) => {
    const { cod, produto, quantidade, preco } = req.body;
    const sql = 'INSERT INTO produtos (cod, produto, quantidade, preco) VALUES( ?, ?, ?, ?)'

    db.run(sql, [cod, produto, quantidade, preco], (err) => {
        if (err) {
            if (err.message.includes('UNIQUE')) {
                
                const updateSql = 'UPDATE produtos SET quantidade = quantidade + ? WHERE cod= ?';
                
                
                
                db.run(updateSql, [quantidade, cod], (updateErr) => {
                    if (updateErr) {
                        return res.status(500).json({erro: 'Erro ao atualizar'})
                    }
                    return res.status(200).json({sucess: 'Adicionado com sucessor'})
                })
                
                const selectSql = 'SELECT * FROM produtos WHERE cod = ?'
                db.all(selectSql, [cod], (err, rows) => {
                    if (err) {
                        return res.status(500).json({error: 'Erro ao pegar dados de produto existente.'})
                    }
                    return res.json(rows);
    
                })
            }
            else {
                return res.status(500).json({ error: 'Erro ao cadastrar produto.' })
            }

        }
        else {
            return res.status(201).json({ sucess: 'Produto adicionado com sucesso!' })
        }
    })


})

app.get('/estoque/buscar', (req, res) => {
    const buscar = req.query.busca;
    let sql = 'SELECT * FROM produtos';
    const params = [];

    if (buscar) {
        sql += ' WHERE CAST(cod AS TEXT) LIKE ? OR produto LIKE ?';
        params.push(`%${buscar}%`, `%${buscar}%`);
        
    }
    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({error: 'Erro ao buscar banco.'})
        }
        return res.status(200).json(rows);
    })
})

app.delete(`/estoque/deletar:cod`, (req, res) => {
    const { cod } = req.body;
    const sql = 'DELETE FROM produtos WHERE cod = ?';

    db.run(sql, [ cod ], (err) => {
        if (err) {
            return res.status(500).json({error: 'Erro ao deletar item.'});
        }

        return res.status(201).json({sucess: 'Item deletado com sucesso!'})
    })
})



app.listen(3000)