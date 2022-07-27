const app = require('./src/app'); // requerindo o arquivo app.js pra ser usado neste arquivo
const PORT = process.env.PORT || 8000; // definindo a porta de conexão

app.listen(PORT, () => 
    console.log(`Servidor Rodando na Porta ${PORT}`)); // criando a conexão do servidor