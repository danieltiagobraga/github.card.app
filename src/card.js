import './card.css';
import React from 'react';

const Card = (props) => (
  <div className="github-profile">
    <img src={props.avatar_url} className="img" />
    <div className="info">
      <div className="name">{props.name}</div>
      <div className="company">{props.company}</div>
    </div>
  </div>
);

export default Card;