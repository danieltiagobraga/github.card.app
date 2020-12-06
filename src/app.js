import React, { useState } from 'react';
import Form from './form.js'
import CardList from './cardList.js'

const App = (props) => {
  const [profiles, addNewProfile] = useState([]);

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={(p) => addNewProfile([...profiles, p])} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
