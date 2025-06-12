// Importa o módulo 'express' e os tipos 'Request' e 'Response' para tipagem TypeScript
import express, { Request, Response } from 'express';

// Importa o middleware 'cors' para permitir requisições de outros domínios
import cors from 'cors'; // Importa o CORS

// Importa a classe ControladorUsuario que gerencia as operações relacionadas ao usuário
//import { ControladorUsuario } from './controladora/ControladorUsuario';

// Importa as rotas de usuário
import usuarioRoutes from './routes/Usuario.routes'; 
// Cria uma instância da aplicação Express
export const app = express();
// Adiciona o middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Configura e aplica o middleware CORS na aplicação
// Isso permite que o backend aceite requisições vindas de outros domínios (como um frontend separado)
app.use(cors());

// Define uma rota GET na raiz do servidor ("/")
// Quando acessada, responde com uma mensagem simples
// Basta digitar na url do browser: http://localhost:3000/
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Mundo! Bem-vindo ao Express com TypeScript.');
});


// Registra o conjunto de rotas de usuário com o prefixo '/api'
app.use('/api', usuarioRoutes);

// Define a porta onde o servidor vai escutar
const PORT = 3000;

// Inicia o servidor e exibe uma mensagem no console indicando que está rodando
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
