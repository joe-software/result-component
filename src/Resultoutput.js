import React from 'react';
import styled from 'styled-components'

function Resultoutput(props){
    return(        
          <Container>
            <h2>Your average result</h2>
            <div className='circle'>
              <div>
              <p>{props.averageScore}<span>%</span></p>
              </div>
            </div>
            <h2>{props.header}</h2>
            <h3>{props.message}</h3>
          </Container>
        
    )
}

export default Resultoutput

const Container = styled.div`

height: 100%;
background: rgb(229,252,194);
background: linear-gradient(180deg, rgba(229,252,194,1) 15%, rgba(157,224,173,1) 55%, rgba(69,173,168,1) 83%, rgba(84,121,128,1) 97%);
width: 100%;
border-radius: 35px;
display: flex;
flex-direction: column;
align-items: center;

h2, p, h3{
  margin-top: 10%;
  color: #4d4c4d;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
}
p{
  margin-top: 0%;
  font-weight: normal;
  font-size: 3rem;
}
h3{
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
  margin: 3%;
}
span{
  color: #5e5d5e;
}
.circle {
  margin-top: 10%;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
 
  .circle {
    height: 200px;
    width: 200px;
  }
  }

@media only screen and (max-width: 800px) {
  h2{
    font-size: 1.6rem;   
  }
  
  .circle {
    height: 150px;
    width: 150px;
  }
  }
`