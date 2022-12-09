import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    const newUser = await userCreateService({
      firstName,
      lastName,
      email,
      phone,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
