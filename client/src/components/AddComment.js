import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getArticlesQuery,
  addCommentMutation,
  getCommentsQuery
} from '../queries';

class AddComment extends Component {
  state = {
    user: '',
    text: '',
    articleId: ''
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h1>Add Comment</h1>
        <div className="field">
          <label> User name: </label>
          <input name="user" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label> Text: </label>
          <input name="text" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label> Article: </label>
          <select name="articleId" onChange={this.handleChange}>
            <option>Select Article Title</option>
            {this.showArticles()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.addCommentMutation({
      variables: {
        user: this.state.user,
        text: this.state.text,
        articleId: this.state.articleId
      },
      refetchQueries: [{ query: getCommentsQuery }]
    });
  };

  showArticles() {
    const { data } = this.props;
    if (data.loading) {
      return <option disabled>Loading articles ..</option>;
    } else {
      return data.articles.map(article => (
        <option key={article.id} value={article.id}>
          {article.title}
        </option>
      ));
    }
  }
}

export default compose(
  graphql(getArticlesQuery),
  graphql(addCommentMutation, { name: 'addCommentMutation' })
)(AddComment);
