import gql from 'graphql-tag';

export const _addPost = gql `
  mutation createPost(
    $title: String!,
    $content: String!,
    $authorId: ID!,
  ) {
    createPost(
      title: $title,
      content: $content,
      authorId: $authorId,
    ) {
      title
      content
      authorId
    }
  }
`;