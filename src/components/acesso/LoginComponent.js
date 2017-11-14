import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ChoiceCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 90px 30px 0px 30px;
  height: auto;
  width: 350px;
  border-radius: 30px;
  border: 0.5px solid purple;

  a{
    display: flex;
    text-decoration: none;
    color: purple;
    height: 50px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  a:hover{
    color: white;
  }
`

class Login extends React.Component {
  render(){
    return(
      <section className="row-section">
        <ChoiceCard className="animated-btn">
          <Link to="/loginCliente" >Sou cliente</Link>
        </ChoiceCard>
        <ChoiceCard className="animated-btn">
          <Link to="/loginOperador" >Sou operador</Link>
        </ChoiceCard>
        <ChoiceCard className="animated-btn">
          <Link to="/loginAdmin" >Sou administrador</Link>
        </ChoiceCard>        
      </section>
    );
  }
}

export default Login;