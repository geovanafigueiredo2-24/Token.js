const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express();

app.use(express.json());

app.get('/token', (req, res) => { 
  const payload = {
  nome:"geovana",
  };

  const token = jwt.sign(payload, "e74e41e5561cd01e0d2b4e0a3183f8473e5288dc43c44fe3")
res.json({ accessToken: token })
});

app.post('/validar', async (req, res) => {
    
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(400).json({ error: 'Token não enviado' });
    }

    const payload = jwt.verify(token, 'SEU_SEGREDO');

    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' });
  }
});


app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});