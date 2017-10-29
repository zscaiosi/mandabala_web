import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrincipalAdmin from './PrincipalAdmin';
import Header from '../../helpers/Header';
import Clientes from './Clientes';
import AtualizarCliente from './AtualizarClienteComponent';
import CadastroCliente from './CadastroClienteComponent';
import CadastroMaquina from './CadastroMaquinaComponent';

class AdminDashboard extends Component {

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}> 
        <Header isAdmin={true} />
        <Switch>
          <Route exact path="/dashboard/admin/principal" component={PrincipalAdmin} />
          <Route exact path="/dashboard/admin/clientes/" component={Clientes} />
          <Route exact path="/dashboard/admin/clientes/cadastro" component={CadastroCliente} />
          <Route exact path="/dashboard/admin/clientes/atualizacao/:_id" component={AtualizarCliente} />
          <Route exact path="/dashboard/admin/maquinas/cadastro" component={CadastroMaquina} />
        </Switch>
      </div>
    );
  }
}

export default AdminDashboard;