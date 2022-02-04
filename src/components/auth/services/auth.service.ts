import { AuthDao } from '../dao/auth.dao';
import bcrypt from 'bcrypt';
import { userErrors } from '@errors/index';
import jwt from 'jsonwebtoken';
import { config } from '@config/index';

const oneDay = 86400;

export class AuthService {
  private readonly authDao: AuthDao;
  constructor() {
    this.authDao = new AuthDao();
  }

  async save(user: CreateUser): Promise<SigupResponse> {
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

    const isAuthorize = bcrypt.compareSync(password, user.password);

    if (!isAuthorize) throw userErrors.wrongCredentials();

    const expiresIn = new Date().getTime() + oneDay;
    const token = jwt.sign(
      { ...user, password: undefined },
      config.jwt.secret,
      {
        algorithm: 'HS256',
        expiresIn: expiresIn
      }
    );

    return {
      token,
      expiresIn
    };
  }
}
