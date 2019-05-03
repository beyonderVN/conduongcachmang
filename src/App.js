import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'


const  URI= 'https://api-apeast.graphcms.com/v1/cjnclrsl31wys01g5ksxz3crg/master'
const client = new ApolloClient({
  link: new HttpLink({ uri: URI }),
  cache: new InMemoryCache()
})
class App extends Component {
  render() {
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
            // target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ApolloProvider client={client}>
          Apollo
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
