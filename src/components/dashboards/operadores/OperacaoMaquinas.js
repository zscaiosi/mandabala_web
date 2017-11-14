import React from 'react';
import axios from 'axios';
import {api} from '../../../config.json';
import styled from 'styled-components';
import moment from 'moment';
import renaImg from '../../../css/rena.jpg';

const InfoDiv = styled.div`
  display: flex;
  margin-top: 50px;
`;

class OperacaoMaquinas extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      maquinasSuccess: false,
      isGettingMaquinas: false,
      maquinasList: null
    }

  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps, this.props)
    if( nextProps.match.params.cliente ){
      this.getMaquinas(nextProps.match.params.cliente);
    }
  }

  componentDidMount(){
    this.getMaquinas(this.props.match.params.cliente);
  }

  getMaquinas(clienteId){

    this.setState({
      isGettingMaquinas: true
    });

    const request = axios.get(`${api.url}/maquinas/listar/minhas?cliente=${clienteId}`);

    request.then( (response) => {
      this.setState({
        maquinasSuccess: true,
        maquinasList: response.data.results,
        isGettingMaquinas: false
      });
    }).catch( (error) => {
      this.setState({
        maquinasSuccess: false,
        isGettingMaquinas: false
      });
    });
  }

  calculateIncome(maquina){
    return Number(maquina.valor_hora)*Number(maquina.tempo_total_ligada/3600).toFixed(2);
  }

  calculateLastIncome(maquina){
    console.log(([...maquina.periodos_ligada].pop()/3600).toFixed(2))
    return (Number(maquina.valor_hora)*(Number([...maquina.periodos_ligada].pop())/3600)).toFixed(2);
  }

  createTimeStamp(rawTime){
    let percentageHour = Number(rawTime/3600).toFixed(2);
    let strPercentage = percentageHour.toString().split(".");
    let hourDigit = strPercentage[0];
    let minuteDigit = Math.round((Number(strPercentage[1])/100)*60);

    return (Number(hourDigit) >= 1 ? Number(hourDigit) : 0)+" Hrs "+ minuteDigit +" mins ";
  }  

  render(){
    return(
      <span>
        {
          this.state.maquinasList ?
          this.state.maquinasList.map( (maquina, index) => {
            return(
              <section key={index} className="row-section" style={{ marginTop: '10px' }} >
                <section className="panel" style={{ width: '100%', flexDirection: 'row' }} >
                  <article  className="col-3 row-center">
                    <img src={renaImg} alt="rena" style={{ height: '150px', width: '100px' }} />
                    <InfoDiv>
                      <p style={{ textAlign: 'center' }} >
                        <span style={{color: 'purple'}} >Modelo: <b>{maquina.modelo}</b> </span>
                      </p>
                    </InfoDiv>
                  </article>                   
                  <article className="col-3 row-center">
                    <InfoDiv>       
                      <p style={{ textAlign: 'center' }} >
                        <span style={{color: 'purple'}} >Ultima vez ligada: <b>{maquina.periodos_ligada ? this.createTimeStamp([...maquina.periodos_ligada].pop()) : "?"}</b> </span>
                      </p>
                    </InfoDiv>
                  </article>
                  <article className="col-3 row-center">
                    <InfoDiv>       
                      <p style={{ textAlign: 'center' }} >
                        <span style={{color: 'purple'}} >Último Faturamento : <b>{ maquina.periodos_ligada ? ( this.calculateLastIncome(maquina) === "NaN" ? 0.00.toFixed(2) : this.calculateLastIncome(maquina) ) : "?" }</b> </span>
                      </p>
                    </InfoDiv>
                  </article>               
                  <article className="col-3 row-center">
                    <InfoDiv>       
                      <p style={{ textAlign: 'center' }} >
                        <span style={{color: 'purple'}} >Faturamento Total: <b>{ this.calculateIncome(maquina).toFixed(2) }</b> </span>
                      </p>
                    </InfoDiv>
                  </article>               
                </section>
              </section>  
            );              
          })
        :
          <section className="row-section" style={{ marginTop: '10px' }} >
            <i
              style={{ color: "purple", marginTop: "10px" }}
              className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>  
          </section>        
        }        
      </span>
    );
  }
}

export default OperacaoMaquinas;