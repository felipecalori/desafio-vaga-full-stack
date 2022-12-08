import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (
  { firstName, lastName, email, phone }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (firstName !== undefined) {
    await userRepository.update(account!.id, { firstName: firstName });
  }

  if (lastName !== undefined) {
    await userRepository.update(account!.id, { lastName: lastName });
  }

  if (email !== undefined) {
    await userRepository.update(account!.id, { email: email });
  }

  if (phone !== undefined) {
    await userRepository.update(account!.id, { phone: phone });
  }

  await userRepository.update(account!.id, { updated_at: new Date() });

  return true;
};

export default userUpdateService;
