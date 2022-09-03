import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors } from './common/style';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import axios from 'axios'

const apiURL = 'https://urchin-app-omluv.ondigitalocean.app';
const endpoint = 'api/login'
const url = `${apiURL}/${endpoint}`;


async function loginUser() {
  return axios.post(url, {
    name: 'avi',
    pass: 'docker'
  }, {headers: {'Content-Type': 'application/json'}});
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.text};
`;

function App() {

  return (
      <Wrapper>
        <button onClick={loginUser}>ok</button>
        <Navbar/>
        <Homepage/>
      </Wrapper>
  )
}

  /*

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log(token)
    //setToken(token);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>      
    </div>
    
  );
  */


export default App;
