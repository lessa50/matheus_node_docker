const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Aprendendo Docker basico com Matheus Battisti - Hora de Codar');
});
app.listen(port, () =>{
    console.log("Servidor rodando na porta" + port);
})