import { User } from '../models/user.model';

class UserRepository {

    getAll() {
        return User.find();
    }

    getById(id: string) {
        return User.findOne({ _id: id });
    }

    getByEmail(email: string) {
        return User.findOne({ email });
    }

    create(user: User) {
        return User.create(user);
    }
}

export default new UserRepository;
