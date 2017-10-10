import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AlignDiv = styled.div`
  display: flex;
  margin: 50px 0px 0px 50px;
`

class Header extends Component {
  render(){
    return(
      <section id="header">
        <AlignDiv>
          <article className="nav-btn" >
            <Link to="/dashboard/admin/principal" >Home</Link>
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

export default Header;