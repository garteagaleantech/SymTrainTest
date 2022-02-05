type AuthLoginResponse = {
  token: string;
  expiresIn: number;
};

type Authorization = {
  sub: number;
  iat: number;
  exp: number;
};
