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

import UsersImage from "./assets/users.png"

function App() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastro Usuário</Title>

        <ContainerInputs>
          <div>
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
          </div>

          <div>
            <InputLabel>
              Email<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="Email do usuário" />
          </div>

        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default App;
