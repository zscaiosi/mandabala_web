import React, {Component} from 'react';
import styled from 'styled-components';
import {getClienteRequest} from '../../../actions/clienteActions';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

const InfoDiv = styled.div`
  display: flex;
  margin-top: 0px;
`;


class Clientes extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getClienteRequest(null);
  }

  componentWillReceiveProps(nextProps){
    if( this.props.getClienteSucces !== null ){
      
    }
  }

  render(){
    return(
      <span>
        {
          this.props.getClienteSucces !== null ? 
            this.props.getClienteSucces.results.map( (cliente, i) => {
              return(
                <section key={i} className="row-section" style={{ marginTop: '10px' }} >
                  <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
                  {/* Um painel de informações */}
                      <article className="col-3 row-center">
                        <InfoDiv>       
                          <p style={{ textAlign: 'center' }} >
                            Razão Social: { cliente.razao_social }
                          </p>
                        </InfoDiv>
                      </article>
                      <article className="col-3 row-center">
                        <InfoDiv> 
                          <p style={{ textAlign: 'center' }} >
                            Responsável: { cliente.responsavel }
                          </p>                          
                        </InfoDiv>
                      </article>
                      <article className="col-3 row-center">
                        <InfoDiv> 
                          <p style={{ textAlign: 'center' }} >
                            Maquinas: { cliente.nr_maquinas }
                          </p>                          
                        </InfoDiv>
                      </article>      
                      <article className="col-3 row-center">
                        <Link to="/dashboard/admin/clientes/cadastro" className="link"> <button className="clickable-button" style={{margin: '0px'}} >Cadastrar Cliente</button> </Link>
                        <Link to={`/dashboard/admin/clientes/atualizacao/${cliente._id}`} className="link" > <button className="clickable-button" style={{margin: '0px'}} >Atualizar Cliente</button> </Link>
                      </article>                                      
                  {/* FIM DO PAINEL */}
                  </section>   
                </section>
              );
            })
          :
            <section className="row-section" style={{ marginTop: '10px' }} >
              <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >          
                <b style={{ display: 'flex', justifyContent: 'center', width: '100%' }} >"Aguarde..."</b>
              </section>
            </section>
        }
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isGettingCliente: state.cliente.isGettingCliente,
    getClienteSucces: state.cliente.getClienteSuccess
  }
}

export default connect(mapStateToProps, {getClienteRequest})(Clientes);