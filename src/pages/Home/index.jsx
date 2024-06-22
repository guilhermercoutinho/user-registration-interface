import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from "./styles";

import UsersImage from "../../assets/users.png";

function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastro Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Ideda do usuário" />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usuário" />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
