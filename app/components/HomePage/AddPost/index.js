import React, { Fragment } from 'react';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import styles from './styles.module.scss';

const _addPost = gql `
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
`

const AddPost = (props) => {
  return (
    <Fragment>

      <Mutation 
        mutation={_addPost}
      >

        {(addPost, { data }) => (
          <button 
            className={styles.action}
            onClick={() => {
              addPost({
                variables: {
                  title: 'API Revolution',
                  content: 'Enjoy amazing GraphQL',
                  authorId: 8
                }
              })
            }}
          >
            Clicca per aggiungere
          </button>
        )}

      </Mutation>

    </Fragment>
  );
}

export default AddPost;
