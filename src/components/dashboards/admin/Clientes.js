import React, {Component} from 'react';
import styled from 'styled-components';
import {getClienteRequest} from '../../../actions/clienteActions';
import {getMaquinasRequest} from '../../../actions/maquinaActions';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { api } from '../../../config.json';

const InfoDiv = styled.div`
  display: flex;
  margin-top: 0px;
`;


class Clientes extends Component {
  constructor(props){
    super(props);

    this.state = {
      deleteSuccess: false
    }

    this.deleteCliente = this.deleteCliente.bind(this);
  }

  componentDidMount(){
    this.props.getClienteRequest(null);
  }

  deleteCliente(id){
    this.setState({
      isDeleting: true
    });

    const request = axios.delete(`${api.url}/clientes/remover/${id}`);

    request.then( (response) => {

      this.setState({
        isDeleting: false
      }, () => window.location.reload());
      
    }).catch( (error) => {

      this.setState({
        isDeleting: false,
        errorDelete: error
      });

    });
  }

  render(){
    console.log(this.props)
    return(
      <span>
        {
          this.props.getClienteSucces !== null && this.props.getClienteSucces.results ? 
            this.props.getClienteSucces.results.map( (cliente, i) => {
              return(
                <section key={i} className="row-section" style={{ marginTop: '10px' }} >
                  <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
                  {/* Um painel de informações */}
                      <article className="col-3 row-center">
                        <InfoDiv>       
                          <p style={{ textAlign: 'center' }} >
                            <span style={{color: 'purple'}} >Razão Social:</span> { cliente.razao_social }
                          </p>
                        </InfoDiv>
                      </article>
                      <article className="col-3 row-center">
                        <InfoDiv> 
                          <p style={{ textAlign: 'center' }} >
                          <span style={{color: 'purple'}} >Responsável:</span> { cliente.responsavel }
                          </p>
                        </InfoDiv>
                      </article>
                      <article className="col-3 row-center">
                        <InfoDiv> 
                          <p style={{ textAlign: 'center' }} >
                          <span style={{color: 'purple'}} >Máquinas:</span> { cliente.nr_maquinas ? cliente.nr_maquinas : 0 }
                          </p>
                        </InfoDiv>
                      </article>
    
                      <article className="col-3 row-center">
                        <button className="clickable-button" style={{margin: '0px'}} ><Link to={`/dashboard/admin/clientes/atualizacao/${cliente._id}`} > Atualizar Cliente</Link></button> 
                        <button className="clickable-button" style={{margin: '0px'}} onClick={() => this.deleteCliente(cliente._id)} >{ this.state.isDeleting ? "Removendo..." : "Remover Cliente" }</button>
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
    getClienteSucces: state.cliente.getClienteSuccess,
    getMaquinasSuccess: state.maquina.getMaquinasSuccess
  }
}

export default connect(mapStateToProps, {getClienteRequest, getMaquinasRequest})(Clientes);