import React from 'react';
//import {Route, Switch, Link} from 'react-router-dom';
import InputField from '../../helpers/InputFieldComponent';
import styled from 'styled-components';
import axios from 'axios';
import { api } from '../../../config.json';
import { connect } from 'react-redux'
import { getClienteRequest } from '../../../actions/clienteActions';

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

class AtualizarCliente extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      "nr_maquinas": '',
      errorMessage: '',
      success: false,
      enviando: false,
      payload: {
        "_id": this.props.match.params._id,        
        "razao_social": '',
        "cnpj": '',
        "email": '',
        "password": '',
        "cpf": '',
        "responsavel": '',
        "endereco": '',
        "complemento": '',
        "bairro": '',
        "cidade": '',
        "estado": '',
        "cep": '',
        "rg": '',
        "nascimento": '',
        "estado_civil": '',
        "sexo": '',
        "telefone": '',
        "celular": '',        
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('initial state: ', this.state);

    if( this.props.getClienteSuccess ){
      const item = this.props.getClienteSuccess.results.find( (element) => element._id === this.props.match.params._id );
  
      if( item ){
        this.setState({
          "nr_maquinas": item ? item.nr_maquinas : 0,
          payload: {
            ...this.state.payload,
            "_id": this.props.match.params._id,
            "razao_social": item.razao_social,
            "cnpj": item.cnpj,
            "email": item.email,
            "password": item.password,
            "cpf": item.cpf,
            "responsavel": item.responsavel,
            "endereco": item.endereco,
            "complemento": item.complemento,
            "bairro": item.bairro,
            "cidade": item.cidade,
            "estado": item.estado,
            "cep": item.cep,
            "rg": item.rg,
            "nascimento": item.nascimento,
            "estado_civil": item.estado_civil,
            "sexo": item.sexo,
            "telefone": item.telefone,
            "celular": item.celular,
          }
        });        
      }else{
        this.setState({
          ...this.state
        });
      }
    }else{
      this.props.getClienteRequest(this.props.match.params._id);
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("NEXT", nextProps);

    if( nextProps.getClienteSuccess !== null ){
      const item = nextProps.getClienteSuccess.result;
      
      this.setState({
        "nr_maquinas": item ? item.nr_maquinas : 0,
        payload: {
          ...this.state.payload,
          "razao_social": item.razao_social,
          "cnpj": item.cnpj,
          "email": item.email,
          "password": item.password,
          "cpf": item.cpf,
          "responsavel": item.responsavel,
          "endereco": item.endereco,
          "complemento": item.complemento,
          "bairro": item.bairro,
          "cidade": item.cidade,
          "estado": item.estado,
          "cep": item.cep,
          "rg": item.rg,
          "nascimento": item.nascimento,
          "estado_civil": item.estado_civil,
          "sexo": item.sexo,
          "telefone": item.telefone,
          "celular": item.celular,
        }
      });       
    }
  }

//Faz o PUT
  putAtualizarClienteRequest(payload){

    this.setState({
      enviando: true
    })

    const instance = axios.create({
      headers: {
        "Content-Type":"application/json"
      }
    });

    const request = instance.put(`${api.url}/clientes/atualizar`, payload);

    request.then( (response) => {
      this.setState({
        success: true,
        enviando: false
      });
    }).catch( (error) => {
      console.log('PUT error: ', error);
    });
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      ...this.state,
      payload: {
        ...this.state.payload,
        [name] : value
      }
    }, () => console.log("Name; Value; State:\n", name, value, this.state));
  }

  handleSubmit(e){
    //e.target.preventDefault();
    let payload = {
      ...this.state.payload
    };

    Object.keys(this.state.payload).map( (key, index) => {
      if( this.state.payload[key] === "" ){
        //payload: this.state.payload[key];
        this.setState({
          errorMessage: 'Todos os campos são obrigatórios!'
        });

        return        
      }
    });

    console.log("PAYLOAD: ", payload);

    this.setState({
      success: false
    }, () => this.putAtualizarClienteRequest(payload) );
  }

  render(){
    this.state.success ? alert("Enviado!") : null;

    return(
      <section className="row-section">

        <div className="panel panel-cadastro">
          <InputField
            inputType="text"
            fieldName="Email:"
            name="email"
            value={this.state.payload.email}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="password"
            fieldName="Senha:"
            name="password"
            value={this.state.payload.password}
            onChange={(e) => this.handleChange(e)}
          />                     
                  
          <InputField
            inputType="text"
            fieldName="Razão Social:"
            name="razao_social"
            value={this.state.payload.razao_social}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="CNPJ:"
            name="cnpj"
            value={this.state.payload.cnpj}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Endereço Empresa:"
            name="endereco"
            value={this.state.payload.endereco}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Complemento:"
            name="complemento"
            value={this.state.payload.complemento}
            onChange={(e) => this.handleChange(e)}
          /> 

          <InputField
            inputType="text"
            fieldName="Bairro:"
            name="bairro"
            value={this.state.payload.bairro}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="CEP:"
            name="cep"
            value={this.state.payload.cep}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Cidade:"
            name="cidade"
            value={this.state.payload.cidade}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="select"
            fieldName="Estado:"
            name="estado"
            selectData={[ "SP", "RJ", "PR", "RS", "MS", "MT", "BA", "ES" ]}
            value={this.state.payload.estado}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Nome Responsável:"
            name="responsavel"
            value={this.state.payload.responsavel}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="CPF:"
            name="cpf"
            value={this.state.payload.cpf}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="RG:"
            name="rg"
            value={this.state.payload.rg}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="date"
            fieldName="Nascimento:"
            name="nascimento"
            value={this.state.payload.nascimento}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="radio"
            fieldName="Sexo:"
            name="sexo"
            value={this.state.payload.sexo}
            radioOptions={["Masculino", "Feminino"]}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="radio"
            fieldName="Estado Civil:"
            name="estado_civil"
            value={this.state.payload.estado_civil}
            radioOptions={["Solteiro", "Casado", "Viúvo", "Divorciado"]}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="text"
            fieldName="Telefone:"
            name="telefone"
            value={this.state.payload.telefone}
            onChange={(e) => this.handleChange(e)}
          /> 

          <InputField
            inputType="text"
            fieldName="Celular:"
            name="celular"
            value={this.state.payload.celular}
            onChange={(e) => this.handleChange(e)}
          />  
          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <button onClick={ (e) => this.handleSubmit(e)} >
              { this.state.enviando ? "Enviando..." : "Cadastrar" }
            </button>
          </span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getClienteSuccess: state.cliente.getClienteSuccess
  }
}

export default connect(mapStateToProps, {getClienteRequest})(AtualizarCliente);