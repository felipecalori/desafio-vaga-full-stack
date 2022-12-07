import { Request, Response } from "express";
import userUpdatePasswordService from "../services/userUpdatePassword.service";

const userUpdatePasswordController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { firstName, lastName, password, email, phone } = req.body;

    if (!password) {
      throw new Error("Password required");
    }

    const user = await userUpdatePasswordService(
      { firstName, lastName, password, email, phone },
      id
    );

    return res.status(201).json({ message: "Password updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdatePasswordController;
