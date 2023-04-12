import { BadRequestError, NotFoundError, Unauthorized } from "../errors";
import { User } from "../models/user.model";
import userRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";

class UserService {

   async getAll() {
        return userRepository.getAll();
    }

   async getById(id: string) {
        let userFound;
        try{
            userFound = await userRepository.getById(id);
        }catch {
            throw new BadRequestError('Id inválido');
        }

        if(userFound)
        return userFound;

        throw new NotFoundError('Usuário não encontrado');
    }

    async getByEmail(email: string) {
        return userRepository.getByEmail(email);
    }

    async create(user: User) {
        const { email } = user;

        if (!user)
            throw new BadRequestError('Preencha os campos obrigatórios');

        const userFound = await this.getByEmail(email);

        if (userFound)
            throw new BadRequestError('Usuário já registrado');

        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;

            return userRepository.create(user);
        } catch (error) {
            throw new BadRequestError('Não foi possível criar o usuário');
        }
    }

    async authenticate(email: string, password: string){
        const user = await userRepository.getByEmail(email);

        if(!user) throw new NotFoundError ('Usuário não encontrado');

        const result = await bcrypt.compare(password, user.password);

        if(result) return user;

        if(!result) throw new Unauthorized ('Falha na autenticação');
    }
}

export default new UserService;
