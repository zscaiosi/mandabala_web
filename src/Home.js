import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import LoginAdmin from './components/acesso/LoginAdmin';
import LoginCliente from './components/acesso/LoginCliente';
import LoginOperador from './components/acesso/LoginOperador';
import AdminDashboard from './components/dashboards/admin/AdminDashboard';
import ClientDashboard from './components/dashboards/clientes/ClientDashboard';
import OperadorDashboar from './components/dashboards/operadores/OperadorDashboard';

class Home extends React.Component {
	constructor(props){
		super(props);

		this.state ={
			
		}
	}

	render(){
			return(
/*  Switch itera entre os Routes e retorna o primeiro que tem path compatível  */
				<div id="home-div">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/loginAdmin" component={LoginAdmin} />
						<Route path="/loginCliente" component={LoginCliente} />
						<Route path="/loginOperador" component={LoginOperador} />
						<Route path="/dashboard/admin" component={AdminDashboard} />
						<Route path="/dashboard/cliente" component={ClientDashboard} />
						<Route path="/dashboard/operador" component={OperadorDashboar} />
					</Switch>
				</div>
			);
	}
}

export default Home;