import React, { Component } from "react";
import {connect} from 'react-redux';
import {getClienteRequest} from '../../../actions/clienteActions';
import { getMaquinasRequest } from '../../../actions/maquinaActions';
import styled from 'styled-components';
import renaImg from '../../../css/rena.jpg';

const InfoDiv = styled.div`
  display: flex;
  margin-top: 50px;
`

class PrincipalCliente extends Component {

  componentDidMount(){
    this.props.getClienteRequest(this.props.postLoginClienteSuccess.result._id);
    this.props.getMaquinasRequest(this.props.postLoginClienteSuccess.result._id);
  }

  componentWillReceiveProps(nextProps){
    if( this.props.isGettingCliente === true && nextProps.getClienteSuccess !== null ){
      console.log("next props", nextProps);
    }
  }

  createTimeStamp(rawTime){
    let percentageHour = Number(rawTime/3600).toFixed(2);
    let strPercentage = percentageHour.toString().split(".");
    let hourDigit = strPercentage[0];
    let minuteDigit = Math.round((Number(strPercentage[1])/100)*60);

    return (Number(hourDigit) >= 1 ? Number(hourDigit) : 0)+" Hrs "+ minuteDigit +" mins ";
  }

  calculateIncome(maquina){
    return Number(maquina.valor_hora)*Number(maquina.tempo_total_ligada/3600).toFixed(2);
  }

  render() {
    return (
      <span>

        <section className="row-section" style={{ marginTop: '10px' }} >
          <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
          {/* Um painel de informações */}
              <article className="col-12 row-center">
                <InfoDiv>
                  {
                    this.props.getMaquinasSuccess ? this.props.getMaquinasSuccess.results.map( (maquina, index) => {
                      return(
                        <section key={index} className="maquina-dashboard" >
                          <img alt="imagem da maquina" src={renaImg} />
                          <article className="maquina-nome" >
                            <b>{ maquina.modelo }</b>
                            <p>ID: { maquina._id }</p>
                          </article>
                          <article className="maquina-infos" >
                            <b>
                              {
                                maquina.ligada ? 
                                  <p style={{ color: 'green' }}>Ligada</p>
                                :
                                  <p style={{ color: 'red' }}>Desligada</p>
                              }
                            </b>                            
                            <b>
                              <p className="grey-text">Receita Total:</p>
                              R$ &nbsp;
                              {
                                this.calculateIncome(maquina).toFixed(2)
                              }
                            </b>
                            <b>
                              <p className="grey-text">Tempo em Movimento:</p>
                              {
                                this.createTimeStamp(maquina.tempo_total_ligada)
                              }

                            </b>
                          </article>
                        </section>
                      );
                    })
                  :
                    <i
                      style={{ color: "purple" }}
                      className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>  
  
                  }                        

                </InfoDiv>
              </article>
          {/* FIM DO PAINEL */}
          </section>
        </section>
              
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
    getMaquinasSuccess: state.maquina.getMaquinasSuccess,

    postLoginClienteSuccess: state.cliente.postLoginClienteSuccess
  }
}

export default connect(mapStateToProps, {getClienteRequest, getMaquinasRequest})(PrincipalCliente);
