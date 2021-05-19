
import './App.css';
import profilepic from "./images/avatar.jpg";
import likeicon from "./images/Like-Button.png";
import linkedin from "./images/LinkedIn-Icon.png";
import { useState } from 'react';
import Display from "./Component/Display";
import Count from './Component/Count';

function App() {

  const [skill, setSkill] = useState("")

  const [count, setCount] = useState(0);

  const handleName = ()=>{
    setSkill("My name is Xiomara")
  }

  const handleSkill = ()=>{
    setSkill("I'm a Frontend Developer")
}

  return (
    <>
  <div className="card">

      <img className="avatar" src={profilepic} alt= "avatar"/>

      <h1 className="h1">Hola!</h1>

      <Display tech = {skill}/>

      <div className="btns">
      <button onClick = {handleName} className="name-btn">Name</button>
      <button onClick = {handleSkill} className="skill-btn">Skill</button>
      </div>

      <div>
      <Count tech1 = {count}/> &nbsp;
      <img onClick = {() => setCount(count + 1)} className="like-btn" src={likeicon} alt="Like Button"/>
      </div>

      <div>
      <td onClick={()=> window.open("https://www.linkedin.com/in/xio-rod/", "_blank")}><img className="linkedin" src={linkedin} alt="LinkedIn Button"/></td>
      </div>


  </div>
    </>
  );
}

export default App;
