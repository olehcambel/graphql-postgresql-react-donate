import { gql } from 'apollo-boost';

export const getCommentsQuery = gql`
  {
    comments {
      user
      id
    }
  }
`;

export const addCommentMutation = gql`
  mutation($user: String!, $text: String!, $articleId: String!) {
    addComment(user: $user, text: $text, articleId: $articleId) {
      user
      id
    }
  }
`;

export const getCommentQuery = gql`
  query($id: ID) {
    comment(id: $id) {
      id
      user
      text
      article {
        id
        title
        date
        comments {
          id
          user
          text
        }
      }
    }
  }
`;

export const getArticlesQuery = gql`
  {
    articles {
      title
      id
    }
  }
`;

export const getArticleMutation = gql`
  mutation($date: String!, $title: String!, $text: String!) {
    addArticle(date: $date, title: $title, text: $text) {
      title
      id
    }
  }
`;