import { Request, Response } from "express";
import contactUpdateServices from "../../services/contacts/contactUpdate.service";

const contactUpdateController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email, phone } = req.body;
    const updatedContact = await contactUpdateServices(
      { firstName, lastName, email, phone },
      id
    );
    return res.status(200).json({ message: "Contact updated" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactUpdateController;
