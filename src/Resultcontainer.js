import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Resultoutput from './Resultoutput';
import Testitems from './Testitems';

function Resultcontainer(){
    const [testScore, setTestScore] = useState(
      {
        'Speaking': 0,
        'Listening': 0,
        'Reading': 0,
        'Writing': 0 
  })
    const [averageScore, setAverageScore] = useState(0)
    const [messages, setMessages] = useState({'header': '', 'message': ''})

    function changeScore(e){
      let value = e.target.value
      let key = e.target.className
      if(value > 100 || value < 0 || isNaN(value) ){
        return
      }
      if(true){
      setTestScore({...testScore, [key]: Number(value)})
      }
      }

      useEffect(() => {
        let averageUpdate = Math.round((testScore['Speaking'] + testScore['Listening'] + testScore['Reading'] + testScore['Writing'] ) / 4)
        setAverageScore(averageUpdate)
      }, [testScore])

      useEffect(() => {
        if(averageScore > 80){
          setMessages({'message': 'You have passed and will be able to enrol on the next stage of the course',
          'header': 'Brilliant!'})
        } else if(averageScore > 60){
          setMessages({'message': 'You have passed and will be able to enrol on the next stage of the course',
          'header': 'Good'})
        } else{
          setMessages({'message': 'You will have to try again if you would like to enrol on the next course',
          'header': 'Not great!'})
        }
      }, [averageScore])
      
    return(        
          <Container>
            <div className='halfDivideContainer'>
            <Resultoutput averageScore={averageScore} message = {messages.message} header={messages.header}/>
            </div>
            <div className='halfDivideContainer'>
            <p className='summary'>English Language results</p>
            <Itemscontainer>
            {/* blue */}
              <Testitems color='#c3d7f7' fontColor='#3e87fa' name='Speaking' testScore={testScore['Speaking']} changeScore={changeScore} icon={"fa-solid fa-microphone"} /> 
            {/* red */}
              <Testitems color='#fab6af' fontColor='#fa513e' name='Listening' testScore={testScore['Listening']} changeScore={changeScore} icon={"fa-solid fa-headphones"} />
            {/* green */}
              <Testitems color='#bafaaf' fontColor='#258a13' name='Reading' testScore={testScore['Reading']} changeScore={changeScore} icon={"fa-solid fa-book"}  />
            {/* pruple */}
              <Testitems color='#edc0ed' fontColor='#991f99' name='Writing' testScore={testScore['Writing']} changeScore={changeScore} icon={"fa-solid fa-pen"} />
            </Itemscontainer>
            <Testbutton>Continue</Testbutton>
            </div>
          </Container>        
    )
}

const Itemscontainer = styled.div`
height: 75%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const Testbutton = styled.button`
cursor: pointer;	
background: blue;
width: 80%;
border: s1px solid #4d4c4d; 
margin: auto;
border-radius: 30px;
font-family: 'Open Sans', sans-serif;
height: 10%;
font-size: 1.6rem;
color: #E5FCC2;
margin-bottom: 10%;
background: #594F4F; 
@media only screen and (max-width: 800px) {

  font-size: 1.1rem;
}
`
const Container = styled.div`
height: 80vh;
font-size: 4rem;
width: 60%;
margin: auto;
display: flex;

.summary{
  padding-top: 5%;
  text-align: center;
  color: #594F4F;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
}

.halfDivideContainer{
  width: 100%;
  display: flex;
  flex-direction: column;
}
//set central app position
left: 50%;
top: 50%;
position: absolute;
transform: translate(-50%, -50%);

box-shadow: 11px 10px 40px -10px rgba(123,126,140,0.62);
border-radius: 35px;

@media only screen and (max-width: 1300px) {
margin-top: 5%;
justify-content: flex-start;
width: 90%;
//reset central app position
left: 0;
right: 0;
position: relative;
transform: none;

}

@media only screen and (max-width: 800px) {
  margin-top: 5%;
  flex-direction: column;
  height: 30vh; 
.halfDivideContainer{
  width: 100%;
height: 200%;
}
}
`

export default Resultcontainer