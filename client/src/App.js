import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

// client setup for apollo
const client = new ApolloClient({
  uri: 'http://localhost:5050/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CommentList />
        <AddComment />
      </ApolloProvider>
    );
  }
}

export default App;
