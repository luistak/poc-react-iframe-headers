import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

const fetchRequest = () => {
  const url = 'http://localhost:8080/';
  return fetch(url, {
    headers: {
      abelha: 'azul',
      batata: 'verde',
      aaaaa: 'opa meu jovem',
      opaaar: 'amodeuzu',
    }
  })
  .then(function(response) {
    return response.blob();
  })
  .then(function(data) {
    return URL.createObjectURL(data);
  })
  .catch((aa) => {
    console.error(aa);
  })
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    fetchRequest().then(url => {
      this.setState({
        iframeSrc: url 
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>
            POC - Iframe etc
          </h4>
          <div className="App-iframe">
            {
              this.state.iframeSrc && (
                <iframe src={this.state.iframeSrc} name="POC-iframe"></iframe>
              )
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
