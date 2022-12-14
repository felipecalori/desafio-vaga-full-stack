import { Request, Response } from "express";
import userDeleteSelfService from "../../services/user/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userDeleteSelfService(id);

    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        errer: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteSelfController;
