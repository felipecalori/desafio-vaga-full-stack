import { AnimationContainer, Container, Content } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";

function UserForm() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Campo Obrigatório!"),
    lastName: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    phone: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Sucesso ao criar a usuario", {
          theme: "dark",
        });
        return history.push("/");
      })
      .catch((err) => {
        toast.error("Erro ao criar a usuario.", {
          theme: "dark",
        });
        console.log(err);
      });
  };

  return (
    <Container>
      <Content>
        <Header>
          <h2>Criar Usuario</h2>
          <button onClick={() => handleNavigation("/")}>Voltar</button>
        </Header>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <InputBox>
              <label>Primeiro Nome</label>
              <input
                type="text"
                placeholder="Digite aqui o nome"
                {...register("firstName")}
              />
              {errors.firstName?.message}
            </InputBox>
            <InputBox>
              <label>Sobrenome</label>
              <input
                type="text"
                placeholder="Digite aqui o sobrenome"
                {...register("lastName")}
              />
              {errors.name?.message}
            </InputBox>
            <InputBox>
              <label>Email</label>
              <input
                type="text"
                placeholder="Digite aqui o email"
                {...register("email")}
              />
              {errors.email?.message}
            </InputBox>
            <InputBox>
              <label>Telefone</label>
              <input
                type="text"
                placeholder="Digite aqui o telefone"
                {...register("phone")}
              />
              {errors.phone?.message}
            </InputBox>

            <Button type="submit" purpleSchema>
              Cadastrar
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default UserForm;
