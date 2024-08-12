import React from 'react'

const Third = ({getData}) => {

//Another Concept is Lifting The State Up is used to send data from child component to parent component
    const someInfo = [{
        'name': 'Asad',
        'gender': 'Male'
    },
    {
        'name': 'Jhon Doe',
        'gender': 'Undefined'
    }
];
  return (
    < >
    <h2>Third Component</h2>
    <button onClick={() => getData(someInfo)}>Get Data</button>
    </ >

  )
}

export default Third