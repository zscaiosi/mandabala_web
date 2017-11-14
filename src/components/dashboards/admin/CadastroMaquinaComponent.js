import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import InputField from '../../helpers/InputFieldComponent';
import {postCadastrarMaquinaRequest} from '../../../actions/maquinaActions';

class CadastroMaquina extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      payload: {
        _id: '',
        modelo: '',
        valor_hora: '',
        cliente: '',
        tempo_total_ligada: 0,
        ligada: false,
        periodos_ligada: [],
        ultimas_vezes_ligada: [] 
      }
    }

  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      payload: {
        ...this.state.payload,
        [name]: value
      }
    });
  }

  handleSubmit(){
    this.setState({
      payload: {
        ...this.state.payload,
        _id: new String(this.props.getMaquinasSuccess.results.length+"m"+String(Math.random().toFixed(3))).replace(".","")
      }
    }, () => {
      this.props.postCadastrarMaquinaRequest(this.state.payload);
    });
  }

  render(){
    return(
      <section className="row-section">
        <div className="panel panel-cadastro">
          <InputField
            inputType="text"
            fieldName="Modelo:"
            name="modelo"
            value={this.state.payload.modelo}
            onChange={(e) => this.handleChange(e)}
          />                
                    
          <InputField
            inputType="text"
            fieldName="CNPJ do Cliente:"
            name="cliente"
            value={this.state.payload.cliente}
            onChange={(e) => this.handleChange(e)}
          />
                             
          <InputField
            inputType="number"
            fieldName="Valor da Hora:"
            name="valor_hora"
            min={0}
            value={this.state.payload.valor_hora}
            onChange={(e) => this.handleChange(e)}
          /> 
          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <button onClick={ (e) => this.handleSubmit(e)} >
              { this.props.isPostingMaquina ? "Enviando..." : "Cadastrar" }
            </button>
          </span>
        </div>
      </section>    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getMaquinasSuccess: state.maquina.getMaquinasSuccess,
    postMaquinasSuccess: state.maquina.postMaquinasSuccess,
    isPostingMaquina: state.maquina.isPostingMaquina
  }
}

export default connect(mapStateToProps, {postCadastrarMaquinaRequest})(CadastroMaquina);