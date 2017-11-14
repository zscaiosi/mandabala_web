import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AlignDiv = styled.div`
  display: flex;
  margin: 50px 0px 0px 50px;
`

class Header extends Component {
  render(){
    console.log("PROPS HEADER", this.props)
    if( this.props.isCliente ){
      return(
        <section id="header">
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/dashboard/cliente/principal" >Principal</Link>
            </article>
          </AlignDiv>
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/dashboard/cliente/conta/" >Minha Conta</Link>
            </article>
          </AlignDiv>
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/dashboard/cliente/operadores" >Operadores</Link>
            </article>
          </AlignDiv>          
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/" onClick={ () => window.localStorage.clear() } >Logout</Link>
            </article>
          </AlignDiv>            
        </section>
      );
    }else if( this.props.isOperador ){
      return(
        <section id="header">
          {/* <AlignDiv>
            <article className="nav-btn" >
              <Link to={`/dashboard/operador/maquinas/`} >Máquinas</Link>
            </article>
          </AlignDiv>  */}
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/" onClick={ () => {window.localStorage.clear(); window.location.reload()} } >Logout</Link>
            </article>
          </AlignDiv>                   
        </section>        
      );
    }else{
      return(
        <section id="header">
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/dashboard/admin/principal" >Principal</Link>
            </article>
          </AlignDiv>
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/dashboard/admin/clientes/" >Clientes</Link>
            </article>
          </AlignDiv>
          <AlignDiv>
            <article className="nav-btn" >
              <Link to="/" onClick={ () => window.localStorage.clear() } >Logout</Link>
            </article>
          </AlignDiv>            
        </section>
      );      
    }
  }
}

export default Header;