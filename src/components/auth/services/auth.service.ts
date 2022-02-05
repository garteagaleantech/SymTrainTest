import { AuthDao } from '../dao/auth.dao';
import bcrypt from 'bcrypt';
import { userErrors } from '@errors/index';
import { authorize } from '@libraries/authorization.library';

export class AuthService {
  private readonly authDao: AuthDao;
  constructor() {
    this.authDao = new AuthDao();
  }

  async save(user: CreateUser): Promise<UserResponse> {
    const newUser = await this.authDao.save({
      ...user,
      password: bcrypt.hashSync(user.password, 10)
    });

    return {
      email: newUser.email,
      name: newUser.name,
      id: newUser.id
    };
  }

  async login(credentials: Credentials): Promise<AuthLoginResponse> {
    const { email, password } = credentials;
    const user = await this.authDao.getOne(email);

    if (!user) throw userErrors.userNotFound();

    const match = bcrypt.compareSync(password, user.password);

    if (!match) throw userErrors.wrongCredentials();

    const auth = authorize(user);

    return auth;
  }
}
