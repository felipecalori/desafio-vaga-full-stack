import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userEmailValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const isEmailExists = users.find((elem) => elem.email === userData.email);

    if (isEmailExists) {
      return res.status(400).json({ message: "Email already exist" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(400).json({ message: "Email already exists" });
  }
};

export default userEmailValidationMiddleware;
