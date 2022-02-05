type AuthLoginResponse = {
  token: string;
  expiresIn: number;
};

type Authorization = {
  sub: string;
  iat: number;
  exp: number;
};
