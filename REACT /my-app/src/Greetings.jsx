import React from 'react';

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

export default Greeting;

src/app.jsx
import React from 'react';
import Greeting from './Greetings'

function App() {
  return (
    <div>
      <Greeting name="Bahubali" />
      <Greeting name="Katappa" />
    </div>
  );
}



