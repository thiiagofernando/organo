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
  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi salvo!")
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Informe o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Informe o seu cargo" />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereaço da imagem"
        />
        <ListaSuspensa 
          obrigatorio={true}  
          label="Time" itens={times.sort()}/>
        <Botao>
            Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
