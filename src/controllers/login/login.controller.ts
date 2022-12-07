import { Request, Response } from "express";
import loginService from "../../services/login/userLogin.service";

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await loginService({ email, password });

    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default loginController;
