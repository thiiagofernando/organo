import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times =[
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Desing',
    'Mobile',
    'Inovação e Gestão'
  ]
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Informe o seu nome" />
        <CampoTexto label="Cargo" placeholder="Informe o seu cargo" />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereaço da imagem"
        />
        <ListaSuspensa label="Time" itens={times.sort()}/>
        <Botao>
            Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
