import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Principal from './Principal';
import Header from '../helpers/Header';
import Clientes from './Clientes';
import AtualizarCliente from './AtualizarClienteComponent';

class AdminDashboard extends Component {

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}> 
        <Header />
        <Switch >
          <Route exact path="/dashboard/admin/principal" component={Principal} />
          <Route exact path="/dashboard/admin/clientes" component={Clientes} />
          <Route exact path="/dashboard/admin/clientes/atualizacao" component={AtualizarCliente} />
        </Switch>
      </div>
    );
  }
}

export default AdminDashboard;