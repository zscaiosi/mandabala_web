import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

const LoginDiv = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
`

const EnterButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 350;
`

class LoginAdmin extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name] : value
    });
  } 

  render(){
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

          <EnterButton>
            ENTRAR
          </EnterButton>

        </LoginDiv>
      </div>
    );
  }
}

export default LoginAdmin;