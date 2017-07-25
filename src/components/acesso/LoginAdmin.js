import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import InputField from '../helpers/InputFieldComponent';
import {postLoginAdminRequest} from '../../actions/adminActions';
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

  componentWillReceiveProps(nextProps){
    if( this.props.isPostingLoginAdmin === true && nextProps.postLoginAdminSuccess !== null ){
      console.log('success', nextProps.postLoginAdminSuccess);
    }

    if( nextProps.postLoginAdminError !== null ){
      console.log('error', nextProps.postLoginAdminError)
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.postLoginAdminRequest(this.state);
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
    console.log('func', typeof postLoginAdminRequest);
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

          { this.props.postLoginAdminSuccess !== null ? <Redirect push to="/dashboard"/> : null}

        </LoginDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLoginAdmin: state.admin.isPostingLoginAdmin,
    postLoginAdminSuccess: state.admin.postLoginAdminSuccess,
    postLoginAdminError: state.postLoginAdminError
  }
}

export default connect(mapStateToProps, { postLoginAdminRequest })(LoginAdmin);