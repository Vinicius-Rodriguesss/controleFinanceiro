const express = require('express')
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');


const prisma = new PrismaClient();
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());


// Rota para criar um usuário
app.post('/gastos', async (req, res) => {
  try {
    const { nome, produto, cartao, dia, mes, valor } = req.body;
    const novo = await prisma.usuario.create({
      data: { nome, produto, cartao, dia, mes, valor },
    });
    res.json(novo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para listar usuários
app.get('/gastos', async (req, res) => {
  const lista = await prisma.usuario.findMany();
  res.json(lista);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
