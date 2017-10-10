import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getClienteRequest} from '../../../actions/clienteActions';
import { getMaquinasRequest } from '../../../actions/maquinaActions';
import styled from 'styled-components';

const InfoDiv = styled.div`
  display: flex;
  margin-top: 50px;
`

class Principal extends Component {

  componentDidMount(){
    this.props.getClienteRequest();
    this.props.getMaquinasRequest();
  }

  componentWillReceiveProps(nextProps){
    if( this.props.isGettingCliente === true && nextProps.getClienteSuccess !== null ){
      console.log("next props", nextProps);
    }
  }

  render() {
    return (
      <span>

        <section className="row-section" style={{ marginTop: '10px' }} >
          <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
          {/* Um painel de informações */}
              <article className="col-6 row-center">
                <InfoDiv>       
                  <p style={{ textAlign: 'center' }} >{ this.props.getClienteSuccess !== null && this.props.getClienteSuccess.data.length ? this.props.getClienteSuccess.data.length : "---" }</p>
                  &nbsp;
                  <p style={{ textAlign: 'center' }} >
                    Cliente{ this.props.getClienteSuccess !== null && this.props.getClienteSuccess.data.length > 1 ? "s" : null } registrado.
                  </p>
                </InfoDiv>
              </article>
              <article className="col-6 row-center">
                <Link to="/dashboard/admin/clientes/cadastro" className="panel-cadastro"> <button >Cadastrar Cliente</button> </Link>
              </article>
          {/* FIM DO PAINEL */}
          </section>   
        </section>

        {/* <section className="row-section" style={{ marginTop: '10px' }} >
          <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
          
              <article className="col-6 row-center">
                <InfoDiv>       
                  <p style={{ textAlign: 'center' }} >{ this.props.getClienteSuccess !== null && this.props.getClienteSuccess.data.length ? this.props.getClienteSuccess.data.length : "---" }</p>
                  &nbsp;
                  <p style={{ textAlign: 'center' }} >
                    Maquina{ this.props.getMaquinasSuccess !== null && this.props.getMaquinasSuccess.data.length > 1 ? "s" : null } registrada(s).
                  </p>
                </InfoDiv>
              </article>
              <article className="col-6 row-center">
                ----
              </article>
          
          </section>   
        </section>      */}
              
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingCliente: state.cliente.isGettingCliente,
    getClienteSuccess: state.cliente.getClienteSuccess,
    getClienteError: state.cliente.getClienteError,

    isGettingMaquinas: state.maquina.isGettingMaquinas,
    getMaquinasSuccess: state.maquina.getMaquinasSuccess
  }
}

export default connect(mapStateToProps, {getClienteRequest, getMaquinasRequest})(Principal);
