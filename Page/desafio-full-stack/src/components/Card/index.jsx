import { ContactContainer, Container } from "./styles";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import ContactCard from "../ContactCard";
import api from "../../services/api";
import { toast } from "react-toastify";

function Card({ firstName, lastName, email, phone, contacts, userId }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const deleteUser = () => {
    api
      .delete(`/users/${userId}`)
      .then((_) => {
        toast.success("Sucesso ao deletar usuario", {
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Erro ao deletar usuario", {
          theme: "dark",
        });
        console.log(err);
      });
  };

  return (
    <Container>
      <h4>
        Nome: {firstName} {lastName}
      </h4>
      <section>
        <div className="data">
          <p>Email: {email}</p>
          <p>Telefone: {phone}</p>
          <FiEdit
            onClick={() => {
              localStorage.setItem("register", JSON.stringify("users"));
              localStorage.setItem("id", JSON.stringify(userId));
              handleNavigation("/updateform");
            }}
            style={{
              cursor: "pointer",
            }}
          />
          <FiTrash2
            onClick={() => deleteUser()}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
        <ContactContainer>
          <p>Contatos:</p>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <ContactCard
                key={index}
                firstName={contact.firstName}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
                contactId={contact.id}
                userId={userId}
              ></ContactCard>
            ))
          ) : (
            <p> Cadastre um contato</p>
          )}
          <Button
            onClick={() => {
              handleNavigation("/contactform");
              localStorage.setItem("id", JSON.stringify(userId));
            }}
          >
            Cadastrar Contato
          </Button>
        </ContactContainer>
      </section>
    </Container>
  );
}

export default Card;
