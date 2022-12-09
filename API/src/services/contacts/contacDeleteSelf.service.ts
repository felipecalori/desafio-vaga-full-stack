import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const contactDeleteSelfService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new Error("This id does not exists");
  }

  await contactRepository.delete(contact.id);
  return true;
};

export default contactDeleteSelfService;
