import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import InputField from '../helpers/InputFieldComponent';
import { postLoginOperadorRequest } from '../../actions/clienteActions';
import {Redirect} from 'react-router-dom';

class LoginOperador extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nome_quiosque: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( this.props.isPostingLoginOperador === true && nextProps.postLoginOperadorSuccess !== null ){
      console.log('success', nextProps.postLoginOperadorSuccess);
    }

    if( nextProps.postLoginOperadorError !== null ){
      console.log('error', nextProps.postLoginOperadorError)
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.postLoginOperadorRequest(this.state);
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    console.log('name', name, 'value', value)

    this.setState({
      [name] : value
    });
  } 

  render(){
    console.log('func', this.props);
    return(
      <section className="row-section">
        <div className="panel panel-login">
          <InputField
            inputType="text"
            fieldName="Nome do Quiosque:"
            name="nome_quiosque"
            value={this.state.nome_quiosque}
            onChange={(e) => this.handleChange(e)}
          />

          <InputField
            inputType="password"
            fieldName="Senha:"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />

          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <button onClick={(e) => this.handleSubmit(e)}>
              { this.props.isPostingLoginOperador ? "Aguarde..." : "ENTRAR" }
            </button>       
          </span>

          { this.props.postLoginOperadorSuccess !== null ? <Redirect push to={`/dashboard/operador/maquinas/${this.props.postLoginOperadorSuccess.result.cliente}`} /> : null }

        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLoginOperador: state.cliente.isPostingLoginOperador,
    postLoginOperadorSuccess: state.cliente.postLoginOperadorSuccess,
    postLoginOperadorError: state.cliente.postLoginOperadorError
  }
}

export default connect(mapStateToProps, { postLoginOperadorRequest })(LoginOperador);