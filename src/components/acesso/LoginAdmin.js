import React from 'react';

import {connect} from 'react-redux';
import InputField from '../helpers/InputFieldComponent';
import {postLoginAdminRequest} from '../../actions/adminActions';
import {Redirect} from 'react-router-dom';

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

    if( this.props.isPostingLoginAdmin === true && nextProps.postLoginAdminError !== null ){
      console.log('error', nextProps.postLoginAdminError);
      alert("Login ou senha inválidos!");
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.postLoginAdminRequest({email: this.state.email, password: this.state.password});
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
            <button onClick={(e) => this.handleSubmit(e)} disabled={this.props.isPostingLoginAdmin} >
              { this.props.isPostingLoginAdmin ? "Aguarde..." : "ENTRAR" }
            </button>
          </span>

          { this.props.postLoginAdminSuccess !== null ? <Redirect push to="/dashboard/admin/principal" /> : null }

        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLoginAdmin: state.admin.isPostingLoginAdmin,
    postLoginAdminSuccess: state.admin.postLoginAdminSuccess,
    postLoginAdminError: state.admin.postLoginAdminError
  }
}

export default connect(mapStateToProps, { postLoginAdminRequest })(LoginAdmin);