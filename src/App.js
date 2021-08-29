import React from "react";
import {useState} from "react";
import './App.css';
import styled from "styled-components"
import {Howl, Howler} from 'howler';
import Jibberish from "./Jibberish.mp3"
import OffendRobot from "./offend-robot.mp3"
import SoFocused from "./so-focused.mp3"
import StopTalking from "./stop-talking.mp3"
import ThankYou from "./thank-you.mp3"
import Good from "./good.mp3"
import Kanye from "./kanye.mp3" 
import HipHop from "./hip-hop.mp3"
import Humble from "./humble.mp3"


const audioClips = [
  { src: Jibberish, label: 'Jibberish', key: 'Q'},
  { src: OffendRobot, label: 'Cant offend a robot', key: 'W'},
  { src: SoFocused, label: 'So focused', key: 'E'},
  { src: StopTalking, label: 'Please stop talking', key: 'A'},
  { src: ThankYou, label: 'Thnak You', key: 'S'},
  { src: Good, label: 'Good', key: 'D'},
  { src: Kanye, label: 'Kanye', key: 'Z'},
  { src: HipHop, label: 'Hip Hop', key: 'X'},
  { src: Humble, label: 'Humble', key: 'C'},
  
]

function App() {
  const [label, setLabel] = useState('Press a Key');
  const playSound = (soundTrack, label) => {
    let sound= new Howl({
      src:[soundTrack]
    });
    sound.play();
    setLabel(label)
  }

  return (
    <Main>
      <Drumkit>
        <Display>
          {label}
        </Display>
        <Keys>
          
          {
           audioClips.map((soundObj) => {
            let soundKey= soundObj.key;
            let label= soundObj.label;
            let soundTrack= soundObj.src;
            


            return <Key onClick={() => playSound(soundTrack, label)}>{soundKey}</Key>

           }) 


          }

        </Keys>
      </Drumkit>

    </Main>

  );
}

export default App;

const Main = styled.div`
background-color: #fadbe1;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// EDITH app main styled component woohoo!!

`


const Drumkit = styled.div`
  border-radius: 50px;
  background: #fadbe1;
  box-shadow:  20px 20px 60px #d5babf,
             -20px -20px 60px #fffcff;
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
`
const Display = styled.div`
  border-radius: 50px;
  background: #fadbe1;
  box-shadow:  20px 20px 60px #d5babf,
             -20px -20px 60px #fffcff;
  height: 20%;
  width:90%;
  margin: auto ;
  border-radius: 20px;
  `
const Keys = styled.div`
  border-radius: 50px;
  background: #fadbe1;
  box-shadow:  20px 20px 60px #d5babf,
             -20px -20px 60px #fffcff;
  height: 66.66%;  
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 10px;
  margin: auto;
`
const Key = styled.div`
  border-radius: 50px;
  background: #f9d7de;
  box-shadow:  9px 9px 36px #d4b7bd,
              -9px -9px 36px #fff7ff;
  height: 30%;
  width: 30%;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`