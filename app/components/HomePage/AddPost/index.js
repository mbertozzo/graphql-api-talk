import React, { useState } from 'react';

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
`;

const _getPosts = gql `
  query {
    posts {
      title
      author {
        firstName
      }
    }
  }
`;

const AddPost = (props) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');

  return (

      <Mutation 
        mutation={_addPost}
        refetchQueries={() => [{query: _getPosts}]}
      >

        {(addPost, { data }) => (
          <div className={styles.form}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <input
              type="text"
              name="authorId"
              placeholder="Author ID"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
            />

            <button 
              className={styles.action}
              onClick={() => {
                addPost({
                  variables: {
                    title,
                    content,
                    authorId,
                  }
                });
              }}
            >
              Clicca per aggiungere
            </button>
          </div>
        )}

      </Mutation>

  );
}

export default AddPost;
