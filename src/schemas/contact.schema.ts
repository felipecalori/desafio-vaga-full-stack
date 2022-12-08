import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest } from "../interfaces/contact";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10, "Phone shoud have 10 digits").required(),
});

export { contactSchema };
