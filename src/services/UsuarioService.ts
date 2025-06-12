import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Usuario } from "../models/Usuario";

export class UsuarioService {

    private usuarioRepository: UsuarioRepository;

    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    public async criarUsuario(user: Usuario): Promise<number> {

    console.log('ControladorUsuario'); // Log para depuração

      // === REGRAS DE NEGÓCIO ===
      //São regras que definem como o sistema deve funcionar de acordo com o domínio da aplicação.

      // Verifica se todos os campos obrigatórios foram enviados
      if (!user.name || !user.email || !user.password) {
        throw new Error('Nome, email e senha são obrigatórios.');
      }
      // Verifica se o nome tem pelo menos 3 caracteres
      if (user.name.length < 3) {
        throw new Error('O nome deve ter no mínimo 3 caracteres.');
      }
      // Verifica se o email é válido usando uma expressão regular simples
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        throw new Error('Formato de email inválido.');
      }
      // Verifica se a senha tem pelo menos 6 caracteres
      if (user.password.length < 6) {
        throw new Error('A senha deve ter no mínimo 6 caracteres.');
      }

      // Chama a função para salvar o usuário no banco de dados
      //ação de infraestrutura, mais especificamente, uma operação de persistência de dados.
      //const result = await saveUserToDatabase(name, email, password);
      // Responde com status 201 (Criado) e o resultado
      //res.status(201).json(result);

        const id = await this.usuarioRepository.save(user);
        return id;
    }

}