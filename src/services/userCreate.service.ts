import { IUserRequest } from "../interfaces/user";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../data_source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";

const userCreateService = async ({
  firstName,
  lastName,
  email,
  phone,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user: any) => user.email === email);

  if (!emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.phone = phone;
  user.password = bcrypt.hashSync(password, 10);
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
