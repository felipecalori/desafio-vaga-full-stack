import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";

import { IContactRequest } from "../../interfaces/contact";

const contactCreateService = async (
  { firstName, lastName, email, phone }: IContactRequest,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contact);
  const findUser = await userRepository.findOneBy({ id: userId });

  const contact = new Contact();
  contact.firstName = firstName;
  contact.lastName = lastName;
  contact.email = email;
  contact.phone = phone;
  contact.created_at = new Date();
  contact.updated_at = new Date();
  contact.user = findUser!;

  contactsRepository.create(contact);
  await contactsRepository.save(contact);

  const { user, ...allInfo } = contact;

  const { id, ...rest } = user;

  const newContact = { ...allInfo, user: id };

  return newContact;
};

export default contactCreateService;
