// Importa os tipos Request e Response do Express para tipagem
import { Request, Response } from 'express';

// Importa a função responsável por salvar o usuário no banco de dados
//import { saveUserToDatabase } from '../bancodados/database';

import { UsuarioService } from '../services/UsuarioService';
import { Usuario } from '../models/Usuario';

// Define a classe responsável por controlar as ações relacionadas ao usuário
export class ControladorUsuario {

  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  // Método assíncrono para criar um novo usuário
  public async criarUsuario(req: Request, res: Response): Promise<void>{
    try {
      const { name, email, password } = req.body;
      const novoUsuario: Usuario = { name, email, password };

      const id = await this.usuarioService.criarUsuario(novoUsuario);

      res.status(201).json({ id });
      
    }catch(error: any){
        res.status(400).json({ error: error.message });
    }
  }
}
