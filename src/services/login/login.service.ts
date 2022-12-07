import { IUserLogin } from "../../interfaces/user";
import { AppDataSource } from "../../data_source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Account not found");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    { id: account.id, isAdm: account.isAdm },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export default loginService;
