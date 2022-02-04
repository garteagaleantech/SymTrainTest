import { UserModel } from '@models/index';

export class AuthDao {
  async save(user: CreateUser): Promise<User> {
    const newUser = new UserModel(user as User);
    await newUser.save();

    return newUser.get();
  }

  async getOne(email: string): Promise<User | null> {
    const user = await UserModel.findOne({
      where: { email }
    });

    return user?.get() ?? null;
  }
}
