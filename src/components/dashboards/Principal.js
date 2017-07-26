import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FullContainerSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: grey;
`

const BoxSection = styled.section`
  display: flex;
  justify-content: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  boder: solid 1px purple;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;

  b{
    align-self: center;
   }
  
  a{
    align-self: center;
    text-decoration: none;
    color: black;

    b{
      align-self: center;
    }
  }
`

class Principal extends Component {
  render(){
    return(
      <FullContainerSection>
        <BoxSection>
          <b>1</b>
        </BoxSection>
        <BoxSection>
         <Link to="/dashboard/admin/clientes" > <b>1</b> </Link>
        </BoxSection>
      </FullContainerSection>
    );
  }
}

export default Principal;