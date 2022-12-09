import { Request, Response } from "express";
import contactDeleteSelfServices from "../../services/contacts/contacDeleteSelf.service";

const contactDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await contactDeleteSelfServices(id);
    return res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactDeleteSelfController;
