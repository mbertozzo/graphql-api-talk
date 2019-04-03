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

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import cx from 'classnames';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import AddPost from 'components/HomePage/AddPost';

import styles from './styles.module.scss';

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
  <Fragment>
    <Query query={_getPosts}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Fragment>
            <div className={cx(styles.wrapper, styles.header)}>
              <div>Post Title</div>
              <div>Post Author Name</div>
            </div>

            
            {data.posts.map((post, key) => (
              <div className={styles.wrapper} {...{key}}>
              <div>
                {post.title}
              </div>
              <div>
                {post.author.firstName}
              </div>
              </div>
            ))}

          </Fragment>
        );
      }}
    </Query>

    <AddPost />

  </Fragment>
);

export default HomePage;