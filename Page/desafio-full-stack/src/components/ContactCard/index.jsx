import { Container } from "./styles";
import { FiTrash2, FiEdit } from "react-icons/fi";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function ContactCard({ firstName, lastName, email, phone, contactId }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  const deleteContact = () => {
    api
      .delete(`/contact/${contactId}`)
      .then((_) => {
        toast.success("Sucesso ao deletar contato", {
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Erro ao deletar contato", {
          theme: "dark",
        });
        console.log(err);
      });
  };

  return (
    <Container>
      <p>
        <span>Nome: </span>
        {firstName} {lastName}
      </p>
      <p>
        <span>Email: </span>
        {email}
      </p>
      <p>
        <span>Telefone: </span>
        {phone}
      </p>
      <FiEdit
        onClick={() => {
          localStorage.setItem("register", JSON.stringify("contact"));
          localStorage.setItem("id", JSON.stringify(contactId));
          handleNavigation("/updateform");
        }}
        style={{
          cursor: "pointer",
        }}
      />
      <FiTrash2
        onClick={() => deleteContact()}
        style={{
          cursor: "pointer",
        }}
      />
    </Container>
  );
}

export default ContactCard;
