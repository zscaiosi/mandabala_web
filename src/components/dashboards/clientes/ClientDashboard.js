import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrincipalCliente from './PrincipalCliente';
import Header from '../../helpers/Header';
import Operadores from './Operadores';
import ContaCliente from './ContaCliente';
import CadastroOperador from './CadastroOperador';

// import AtualizarCliente from './AtualizarClienteComponent';
// import CadastroCliente from './CadastroClienteComponent';

class ClientDashboard extends Component {

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}> 
        <Header isCliente={true} />
        <Switch>
          <Route exact path="/dashboard/cliente/principal" component={PrincipalCliente} />
          <Route exact path="/dashboard/cliente/operadores" component={Operadores} />
          <Route exact path="/dashboard/cliente/conta" component={ContaCliente} />
          <Route exact path="/dashboard/cliente/cadastroOperador/:cliente/:position" component={CadastroOperador} />
        </Switch>
      </div>
    );
  }
}

export default ClientDashboard;