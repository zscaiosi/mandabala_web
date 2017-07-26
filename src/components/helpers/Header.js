import React, {Component} from 'react';
import styled from 'styled-components';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  height: 122px;
`

const LogoSection = styled.section`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  flex-grow 1;

  img{
    
  }
`

const WelcomeSection = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-grow 2;
  height: 100%;
 
`

const WelcomeArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  border: solid 1px purple;
`

const ButtonsSection = styled.section`
  display: flex;
  justify-content: center;
  boder: solid 1px pink;
  flex-grow: 4;

  b{
    align-self: center;
    margin: 10px;
  }

`

class Header extends Component {
  render(){
    return(
      <HeaderMain>
        <LogoSection>
          <img src="" alt="logo mandabala" />
        </LogoSection>
        <WelcomeSection>
          <WelcomeArticle>
            <p> Bem-vindo <b> Daniel </b> </p>
            <p> Seu último login foi {this.props.lastLogin} </p>
          </WelcomeArticle>
        </WelcomeSection>
        <ButtonsSection>
          <b>1</b> <b>2</b> <b>3</b> <b>4</b> <b>5</b> <b>6</b>
        </ButtonsSection>
      </HeaderMain>      
    );
  }
}

export default Header;