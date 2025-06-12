import db from '../bancodados/database';
import { Usuario } from '../models/Usuario';

export class UsuarioRepository {
        // Função para salvar um usuário no banco de dados
        public save(user: Usuario): Promise<number>{
            return new Promise((resolve, reject) => {
                // Insere o usuário na tabela (removido parêntese extra no VALUES)
                db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password], 
                    function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        // Retorna o ID do usuário inserido
                        console.log(this.lastID);
                        resolve(this.lastID); // Acessa o ID do último registro inserido
                    }
                });
            });
        }
        
}