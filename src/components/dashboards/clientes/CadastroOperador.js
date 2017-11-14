import React from 'react';
import {connect} from 'react-redux';
import InputField from '../../helpers/InputFieldComponent';
import axios from 'axios';
import {api} from '../../../config.json';

class CadastroOperador extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isPosting: false,
      success: false,
      error: false,
      payload: {
        _id: "op2017"+String(this.props.match.params.cliente)+String(this.props.match.params.position),
        cliente: this.props.match.params.cliente,
        nome_quiosque: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    if( this.state.payload.password.length > 3 && this.state.payload.nome_quiosque.length > 3 ){
      this.postOperador(this.state.payload);
    }else{
      alert("Preencha corretamente!");
    }
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      payload: {
        ...this.state.payload,
        [name] : value
      }
    }, () => console.log("changed", this.state));
  }

  postOperador(payload){
    this.setState({ isPosting: true });

    const request = axios.post(`${api.url}/operadores/cadastrar`, payload);

    request.then( (response) => {
      this.setState({
        isPosting: false,
        success: true,
        error: false      
      }, () => window.location.pathname = "/dashboard/cliente/operadores");
    }).catch((error) => {
      this.setState({
        isPosting: false,
        success: false,
        error: true
      });
    });

  }

  render(){
    return(
      <section className="row-section">
      
        <div className="panel panel-cadastro">
          <InputField
            inputType="text"
            fieldName="Quiosque:"
            name="nome_quiosque"
            maxLength={25}
            value={this.state.payload.nome_quiosque}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="password"
            fieldName="Senha:"
            name="password"
            value={this.state.payload.password}
            onChange={(e) => this.handleChange(e)}
          />

          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <button onClick={this.handleSubmit} >
              { this.state.isPosting ? "Enviando..." : "Cadastrar" }
            </button>
          </span>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect()(CadastroOperador);