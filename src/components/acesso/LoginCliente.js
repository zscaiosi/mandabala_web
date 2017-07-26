import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import InputField from '../helpers/InputFieldComponent';
import {postLoginClienteRequest} from '../../actions/clienteActions';
import {Redirect} from 'react-router-dom';


const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  border: solid 1px purple;
`

const EnterButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 350;
  background-color: purple;
  border: solid 1px purple;
  margin: 10px;
  cursor: pointer;
`

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

    if( nextProps.postLoginClienteError !== null ){
      console.log('error', nextProps.postLoginClienteError)
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
      <div>
        <LoginDiv>
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

          <EnterButton onClick={(e) => this.handleSubmit(e)}>
            ENTRAR
          </EnterButton>

          { this.props.postLoginClienteSuccess !== null ? <Redirect push to="/dashboard/cliente" /> : null }

        </LoginDiv>
      </div>
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