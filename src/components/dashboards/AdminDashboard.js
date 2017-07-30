import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Principal from './Principal';
import Header from '../helpers/Header';
import Clientes from './Clientes';

class AdminDashboard extends Component {

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}> 
        <Header />
        <Switch >
          <Route exact path="/dashboard/admin/principal" component={Principal} />
          <Route exact path="/dashboard/admin/clientes" component={Clientes} />
        </Switch>
      </div>
    );
  }
}

export default AdminDashboard;