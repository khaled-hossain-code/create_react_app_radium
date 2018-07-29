import React from 'react';
import styles from './Person.module.scss';

const person = (props) => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I'm {props.name}, I'm {props.age} years old!. {props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
  )
};

person.defaultProps = {
  name: "default",
  age: 100
} 

export default person;