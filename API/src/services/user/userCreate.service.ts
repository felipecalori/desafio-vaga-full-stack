import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userCreateService = async ({
  firstName,
  lastName,
  email,
  phone,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.phone = phone;
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
