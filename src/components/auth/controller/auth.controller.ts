import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { HttpStatusCodes } from '@constants/index';

export class AuthController {
  private readonly authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;

      const user = await this.authService.save(body);
      res.status(HttpStatusCodes.created).send(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body } = req;

      const user = await this.authService.login(body);
      res.status(HttpStatusCodes.ok).send(user);
    } catch (error) {
      next(error);
    }
  }
}
