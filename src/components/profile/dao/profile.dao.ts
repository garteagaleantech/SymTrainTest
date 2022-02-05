import { UserModel } from '@models/user.model';

export class ProfileDao {
  async getById(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);

    return user?.get() ?? null;
  }
}
