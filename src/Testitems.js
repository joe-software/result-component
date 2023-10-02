import React from 'react';
import styled from 'styled-components'

function Testitems(props){
    return(
          <Container>
            {/* style={{background: props.color, color: props.fontColor}} include above for independant styling */}            
            <div className='subject'><i className={props.icon}></i><p>{props.name}</p></div>     
            <p className='score'><input onChange={props.changeScore} class={props.name} value={props.testScore}></input>/100</p>           
          </Container>        
    )
}

export default Testitems

const Container = styled.div`
width: 80%;
height: 15%;
font-size: 0.7em;
border-radius: 15px;
display: flex;
background-color: #45ADA8;
color: white;
jusitfy-content: space-between;
align-items: center;

.subject{
 
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  margin-left: 5%;
  color: #E5FCC2;
  display: flex;
  i{
    margin-right: 5%;
  }
  @media only screen and (max-width: 800px) {

    font-size: 1.1rem;
  }
}
 input, .score{  
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  color: #4d4c4d;
  margin-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
  @media only screen and (max-width: 800px) {

    font-size: 1.1rem;
  }
 }
  .score{
    text-align: right;
    color: #E5FCC2;
  }
input{
  width: 20%;
  border-radius: 18px;
  margin: 10px;
  color: #594F4F;
}
input,p{
  @media only screen and (max-width: 800px) {

    font-size: 1.1rem;
  }
}


`