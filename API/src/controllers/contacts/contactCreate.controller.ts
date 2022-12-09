import { Response, Request } from "express";
import contactCreateService from "../../services/contacts/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const userId = req.params.id;
    const newContact = await contactCreateService(
      { firstName, lastName, email, phone },
      userId
    );
    return res.status(201).json(newContact);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default contactCreateController;
