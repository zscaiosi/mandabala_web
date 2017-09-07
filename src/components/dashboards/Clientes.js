import React, {Component} from 'react';
import styled from 'styled-components';
import {getClienteRequest} from '../../actions/clienteActions';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

const FullSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 30px;
`

const ClienteRowSection = styled.section`
  display: flex;
  justify-content: center;
  border: solid 1px purple;
  width: 100%;
  height: 100%;
`

const ActionsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

class Clientes extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    // const instance = axios.create({
    //   headers: {
    //     "Content-Type":"application/json"
    //   }
    // });

    // const request = instance.get("http://localhost:8585/clientes/listar");

    // request.then( (result) => {
    //   this.setState({

    //   });
    // })
    this.props.getClienteRequest();
  }

  componentWillReceiveProps(nextProps){
    if( this.props.getClienteSucces !== null ){
      
    }
  }

  render(){
    return(
      <FullSection>
        
          {
            this.props.getClienteSucces !== null ? 
            this.props.getClienteSucces.data.data.map( (cliente, i) => {
              return(
                <ClienteRowSection key={cliente._id}>
                  <div style={{display: 'flex', flexDirection: 'column'}}>Nome: <b>{cliente.nome}</b> </div>
                  <div style={{display: 'flex', flexDirection: 'column'}}>Maquinas: <b>{cliente.maquinas.length}</b> </div>
                  <div style={{display: 'flex', flexDirection: 'column'}}>Maquinas: <b>{cliente.faturamento}</b> </div>
                  <ActionsSection>
                    <Link path="/dashboard/admin/clientes/atualizacao"> Atualizar </Link>
                    {/* <Link path="/dashboard/admin/clientes/exclusao"> Excluir </Link> */}
                  </ActionsSection>
                </ClienteRowSection>
              );
            }) : null
          }
        
        <ClienteRowSection>
          <div>Nome</div><div>Responsável</div><div>Produtos</div><div>Faturamento Total</div>
        </ClienteRowSection>
      </FullSection>
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