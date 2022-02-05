import { HttpStatusCodes } from '@constants/http-status-codes.constant';
import { RequestHandler } from 'express';
import { ProfileService } from '../services/profile.service';

export class ProfileController {
  private readonly profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  me: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req.body;

      const userFound = await this.profileService.getById(user.sub);

      res.status(HttpStatusCodes.ok).send(userFound);
    } catch (error) {
      next(error);
    }
  };
}
