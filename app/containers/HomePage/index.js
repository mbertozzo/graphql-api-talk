/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

/* eslint-disable react/prefer-stateless-function */
const HomePage = () => (
  <Query query={_getPosts}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          {data.posts.map((post, key) => <p {...{key}}>{post.title}</p>)}
        </div>
      );
    }}
  </Query>
);

export default HomePage;