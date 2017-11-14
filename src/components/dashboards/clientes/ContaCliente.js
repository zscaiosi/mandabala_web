import React, {Component} from 'react';
import {connect} from 'react-redux';

class Conta extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="row-section" style={{ marginTop: '10px' }} >
        <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
          <article className="col-12 row-center">
            {
              this.props.getClienteSuccess !== null ?
                <section className="conta-col">
                  <p><b>Razão Social: </b> { this.props.getClienteSuccess.result.razao_social }</p>
                  <p><b>CNPJ: </b> { this.props.getClienteSuccess.result.cnpj }</p>
                  <p><b>Email: </b> { this.props.getClienteSuccess.result.email }</p>
                  <p><b>Endereço: </b> { this.props.getClienteSuccess.result.endereco }</p>
                  <p><b>Bairro: </b> { this.props.getClienteSuccess.result.bairro }</p>
                  <p><b>Cidade: </b> { this.props.getClienteSuccess.result.cidade }</p>
                  <p><b>Estado: </b> { this.props.getClienteSuccess.result.estado }</p>
                  <p><b>CEP: </b> { this.props.getClienteSuccess.result.cep }</p>
                  <p><b>Responsável: </b> { this.props.getClienteSuccess.result.responsavel }</p>
                  <p><b>CPF: </b> { this.props.getClienteSuccess.result.cpf }</p>
                  <p><b>RG: </b> { this.props.getClienteSuccess.result.rg }</p>
                  <p><b>Telefone: </b> { this.props.getClienteSuccess.result.telefone }</p>
                  <p><b>Celular: </b> { this.props.getClienteSuccess.result.celular }</p>
                </section>
              :
                null
            }
          </article>
        </section>
      </section>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    getClienteSuccess: state.cliente.getClienteSuccess
  }
}

export default connect(mapStateToProps, null)(Conta);