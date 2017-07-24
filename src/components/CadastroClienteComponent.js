import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import InputField from './InputFieldComponent';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;
`

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  border: solid;
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
        <FormContainerDiv>
          <InputField
            inputType="text"
            fieldName="CNPJ:"
            name="_id"
            value={this.state._id}
            onChange={(e) => this.handleChange(e)}
          />
          
          <InputField
            inputType="text"
            fieldName="Razão Social:"
            name="razao_social"
            value={this.state.razao_social}
            onChange={(e) => this.handleChange(e)}
          />
          
          <button onClick={this.handleSubmit} ></button>
        </FormContainerDiv>
      </ContainerDiv>
    );
  }
}

export default CadastroCliente;