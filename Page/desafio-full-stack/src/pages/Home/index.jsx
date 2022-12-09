import { Container, Content } from "./styles";
import Button from "../../components/Button";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { CardBox } from "./styles";
import { useHistory } from "react-router-dom";

function Login() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/users").then((resp) => {
      setList(resp.data);
    });
  }, [list]);

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      <Content>
        <CardBox>
          {list.length > 0 ? (
            list.map((user, index) => (
              <Card
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phone={user.phone}
                contacts={user.contacts}
                userId={user.id}
              ></Card>
            ))
          ) : (
            <p> Cadastre um usuário</p>
          )}
        </CardBox>
        <Button onClick={() => handleNavigation("/userform")} purpleSchema>
          Cadastrar Usuário
        </Button>
      </Content>
    </Container>
  );
}

export default Login;
