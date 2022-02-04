type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type CreateUser = Omit<User, 'id'>;

type Credentials = Pick<User, 'email' | 'password'>;

type AuthLoginResponse = {
  token: string;
  expiresIn: number;
};

type SigupResponse = Omit<User, 'password'>;
