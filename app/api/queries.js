import gql from 'graphql-tag';

export const _getPosts = gql `
  query {
    posts {
      title
      author {
        firstName
      }
    }
  }
`;

export const _getAuthors = gql `
  query {
    authors {
      id
      firstName
    }
  }
`;