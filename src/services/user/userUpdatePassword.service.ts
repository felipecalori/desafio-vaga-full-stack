import { AppDataSource } from "../../data_source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";
import bcrypt from "bcrypt";

const userUpdatePasswordService = async (
  { firstName, lastName, password, email, phone }: IUserUpdate,
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

  if (password !== undefined) {
    if (bcrypt.compareSync(password, account!.password)) {
      throw new Error("Inform a different password.");
    }

    const newPassword = bcrypt.hashSync(password, 10);
    await userRepository.update(account!.id, { password: newPassword });
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

export default userUpdatePasswordService;
