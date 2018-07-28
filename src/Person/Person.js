import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={personStyle}>
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