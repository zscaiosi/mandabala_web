import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getOperadoresRequest} from '../../../actions/clienteActions';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ShowSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  border-bottom: solid 0.5px grey;
  margin: 10px;
`;

const PlusDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(128,0,128, 0.5);
  margin-left: 10px;

  a{
    text-decoration: none;
    color: rgba(128,0,128, 0.5);
    padding: 5px;
    border-radius: 5px;    
  }

  a:hover{
    color: white;
    cursor: pointer;
    background-color: rgba(128,0,128, 0.5);

  }
`

class Operadores extends Component {

  componentDidMount(){
    this.props.getOperadoresRequest(this.props.getClienteSuccess.result._id);
  }

  render(){
    return(
      <section className="row-section" style={{ marginTop: '10px' }} >
        <div className="panel purple-border" style={{ flexDirection:'row' }} >
          <article className="col-12 column-start">
            {
              this.props.getOperadoresSuccess !== null && this.props.getOperadoresSuccess.results.length > 0 ? this.props.getOperadoresSuccess.results.map( (operador, index) => {
                return(
                  <ShowSection key={index}>
                    <article >
                      { operador.nome_quiosque }
                    </article>
                    <article>
                      { [...operador.password].map( () => "*") }
                    </article>                    
                  </ShowSection>
                );
              })
            :
              "Carregando..."
            }
          </article>
        </div>
        <div className="operador-add" >
          <article className="col-12 row-center">
            <PlusDiv>
              <Link to={`/dashboard/cliente/cadastroOperador/${this.props.getClienteSuccess.result._id}/${this.props.getOperadoresSuccess !== null ? this.props.getOperadoresSuccess.results.length : 0}`}><i className="fa fa-plus fa-3x" aria-hidden="true"></i></Link>
            </PlusDiv>
          </article>            
        </div>
      </section>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isGettingOperadores: state.cliente.isGettingOperadores,
    getOperadoresSuccess: state.cliente.getOperadoresSuccess,
    getOperadoresError: state.cliente.getOperadoresError,

    getClienteSuccess: state.cliente.getClienteSuccess
  }
}

export default connect(mapStateToProps, { getOperadoresRequest })(Operadores);