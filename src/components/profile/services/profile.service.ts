import { userErrors } from '@errors/user.error';
import { ProfileDao } from '../dao/profile.dao';

export class ProfileService {
  private readonly profileDao: ProfileDao;

  constructor() {
    this.profileDao = new ProfileDao();
  }

  async getById(id: number): Promise<UserResponse> {
    const user = await this.profileDao.getById(id);

    if (!user) throw userErrors.userNotFound();

    return { id: user.id, email: user.email, name: user.name };
  }
}
