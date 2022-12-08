import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { firstName, lastName, email, phone } = req.body;

    const user = await userUpdateService(
      { firstName, lastName, email, phone },
      id
    );

    return res.status(201).json({ message: "user updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
