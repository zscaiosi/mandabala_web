import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import InputField from '../helpers/InputFieldComponent';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
`

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  border: solid;
`

const AcessoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

class CadastroCliente extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      _id: '',
      razao_social: ''
    }

    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(){
    
  }

  render(){
    return(
      <ContainerDiv>

        <AcessoDiv>
          <InputField
            inputType="text"
            fieldName="Email:"
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="password"
            fieldName="Senha:"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />            
        </AcessoDiv>           
                  
        <InputField
          inputType="text"
          fieldName="Razão Social:"
          name="razao_social"
          value={this.state.razao_social}
          onChange={(e) => this.handleChange(e)}
        />

        <FormContainerDiv>
          <InputField
            inputType="text"
            fieldName="CNPJ:"
            name="cnpj"
            value={this.state.cnpj}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Endereço Empresa:"
            name="endereco"
            value={this.state.endereco}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Complemento:"
            name="complemento"
            value={this.state.complemento}
            onChange={(e) => this.handleChange(e)}
          /> 

          <InputField
            inputType="text"
            fieldName="Bairro:"
            name="bairro"
            value={this.state.bairro}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="CEP:"
            name="cep"
            value={this.state.cep}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Cidade:"
            name="cidade"
            value={this.state.cidade}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Estado:"
            name="estado"
            value={this.state.estado}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Nome Responsável:"
            name="responsavel"
            value={this.state.responsavel}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="CPF:"
            name="cpf"
            value={this.state.cpf}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="RG:"
            name="rg"
            value={this.state.rg}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="date"
            fieldName="Nascimento:"
            name="nascimento"
            value={this.state.nascimento}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="radio"
            fieldName="Sexo:"
            name="sexo"
            value={this.state.sexo}
            radioOptions={["Masculino", "Feminino"]}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="radio"
            fieldName="Estado Civil:"
            name="estado_civil"
            value={this.state.estado_civil}
            radioOptions={["Solteiro", "Casado", "Viúvo", "Divorciado"]}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Telefone:"
            name="telefone"
            value={this.state.telefone}
            onChange={(e) => this.handleChange(e)}
          /> 

          <InputField
            inputType="text"
            fieldName="Celular:"
            name="celular"
            value={this.state.celular}
            onChange={(e) => this.handleChange(e)}
          />  
          
          <button onClick={this.handleSubmit} ></button>
        </FormContainerDiv>
      </ContainerDiv>
    );
  }
}

export default CadastroCliente;