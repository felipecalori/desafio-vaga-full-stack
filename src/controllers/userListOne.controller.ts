import { Request, Response } from "express";
import userListOnerService from "../services/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await userListOnerService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
