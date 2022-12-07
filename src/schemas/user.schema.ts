import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/user";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().min(10, "Phone shoud have 10 digits").required(),
});

export { userSchema };
