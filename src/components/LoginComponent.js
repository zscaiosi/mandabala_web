import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ChoicesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ebebeb;
  width: 100%;
  height: 500px;

`

const ChoiceCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
  height: auto;

  a{
    display: flex;
    text-decoration: none;
    color: red;
    height: 50px;
    flex-direction: column;
    justify-content: center;
  }
`

class Login extends React.Component {
  render(){
    return(
      <div>
        <ChoicesDiv>
          <ChoiceCard>
            <Link to="/loginCliente" >Sou cliente</Link>
          </ChoiceCard>
          <ChoiceCard>
            <Link to="/loginOperador" >Sou operador</Link>
          </ChoiceCard>
          <ChoiceCard>
            <Link to="/loginAdmin" >Sou administrador</Link>
          </ChoiceCard>
        </ChoicesDiv>
      </div>
    );
  }
}

export default Login;