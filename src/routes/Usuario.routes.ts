import { Router } from "express";
import { ControladorUsuario } from "../controladora/ControladorUsuario";

// Cria uma instância do controlador de usuário
const router = Router();
const controladorUsuario = new ControladorUsuario();
// Define uma rota POST para criação de usuários
// Quando um cliente envia uma requisição para '/criar-usuario', o método 'criarUsuario' do controlador é executado
router.post('/criar-usuario', (req, res) => { 
    controladorUsuario.criarUsuario(req, res);
});

export default router;
