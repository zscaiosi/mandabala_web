import React from 'react';
import InputField from '../helpers/InputFieldComponent';
import {connect} from 'react-redux';
import {postCadastroRequest} from '../../actions/clienteActions';
import moment from 'moment';
import {Redirect} from 'react-router-dom';

class CadastroCliente extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      payload: {
        _id: '',
        razao_social: '',
        cnpj: '',
        email: '',
        password: '',
        cpf: '',
        responsavel: '',
        endereco: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: 'SP',
        cep: '',
        rg: '',
        nascimento: '',
        estado_civil: '',
        sexo: '',
        telefone: '',
        celular: ''        
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    console.log(name, value);

    if( name === "cpf" ){
      this.setState({
        payload: {
          ...this.state.payload,
          _id: value,
          [name] : value
        }
      }, () => console.log(this.state));      
    }else{
      this.setState({
        payload: {
          ...this.state.payload,
          [name] : value
        }
      }, () => console.log(this.state));      
    }
  }

  handleSubmit(e){
    e.preventDefault();

    const auxArray = Object.values(this.state.payload).filter( (value) => value === "" );

    if( auxArray.length > 0 ){
      alert("Ooops, todos os campos são obrigatórios!");
      console.log(this.state.payload);
      return;
    }
    
    let payload = this.state.payload;

    payload = { ...payload, nascimento: moment(payload.nascimento).format("DD-MM-YYYY") }

    console.log("*sent*", payload);
    this.props.postCadastroRequest(payload);
  }

  render(){
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
            <button onClick={this.handleSubmit} >
              Cadastrar
            </button>
          </span>
        </div>
        { this.props.postCadastroSuccess !== null ? <Redirect push to="/loginCliente" /> : null }
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingCadastro: state.cliente.isPostingCadastro,
    postCadastroSuccess: state.cliente.postCadastroSuccess,
    postCadastroError: state.cliente.postCadastroError
  }
}

export default connect(mapStateToProps, { postCadastroRequest })(CadastroCliente);