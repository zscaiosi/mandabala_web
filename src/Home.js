import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/acesso/LoginComponent';
import CadastroCliente from './components/acesso/CadastroClienteComponent';

class Home extends React.Component {
	constructor(props){
		super(props);

		this.state ={
			
		}
	}

	render(){
			return(
/*  Switch itera entre os Routes e retorna o primeiro que tem path compatível  */
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/cadastrarCliente" component={CadastroCliente} />
						
					</Switch>
			);
	}
}

export default Home;