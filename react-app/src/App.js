import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <SayFullName name="Vlad" surname="Kosachev" link="vk.com" />
          <SayFullName name="Vla234d" surname="Ko21sachev" link="vka.com" />
          <SayFullName name="Vlsdfad" surname="Kosachsdfev" link="vks.com" />
        </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}>Ссылка</a>
      </div>
    )
}


export default App;
