import { Container } from "./styles";

const Button = ({ onCLick, children, purpleSchema = false, ...rest }) => {
  return (
    <Container purpleSchema={purpleSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
