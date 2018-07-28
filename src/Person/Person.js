import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}, I'm {props.age} years old!. {props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
  )
};

person.defaultProps = {
  name: "default",
  age: 100
} 

export default Radium(person);