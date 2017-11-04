import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Header from '../../helpers/Header';
import { postLoginOperadorRequest } from '../../../actions/clienteActions';
import OperacaoMaquinas from './OperacaoMaquinas';

class OperadorDashboard extends Component {

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}> 
        <Header isOperador={true} />
        <Switch>
          <Route exact path="/dashboard/operador/maquinas/:cliente" component={OperacaoMaquinas} /> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPostingLoginOperador: state.cliente.isPostingLoginOperador,
    postLoginOperadorSuccess: state.cliente.postLoginOperadorSuccess,
    postLoginOperadorError: state.cliente.postLoginOperadorError
  }
}

export default connect(mapStateToProps, {postLoginOperadorRequest})(OperadorDashboard);