import React from 'react';

import {connect} from 'react-redux';
import InputField from '../helpers/InputFieldComponent';
import {postLoginClienteRequest} from '../../actions/clienteActions';
import {Redirect} from 'react-router-dom';

class LoginCliente extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( this.props.isPostingLoginCliente === true && nextProps.postLoginClienteSuccess !== null ){
      console.log('success', nextProps.postLoginClienteSuccess);
    }

    if( this.props.isPostingLoginCliente === true && nextProps.postLoginClienteError !== null ){
      console.log('error', nextProps.postLoginClienteError)
      alert("Login ou senha inválidos!");
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.postLoginClienteRequest(this.state);
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
            fieldName="E-mail:"
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

          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <button onClick={(e) => this.handleSubmit(e)}>
              { this.props.isPostingLoginCliente ? "Aguarde..." : "ENTRAR" }
            </button>       
          </span>

          { this.props.postLoginClienteSuccess !== null ? <Redirect push to="/dashboard/cliente/principal" /> : null }

        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLoginCliente: state.cliente.isPostingLoginCliente,
    postLoginClienteSuccess: state.cliente.postLoginClienteSuccess,
    postLoginClienteError: state.cliente.postLoginClienteError
  }
}

export default connect(mapStateToProps, { postLoginClienteRequest })(LoginCliente);