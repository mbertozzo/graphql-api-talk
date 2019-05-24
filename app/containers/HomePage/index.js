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

import { Query } from 'react-apollo';

import AddPost from 'components/AddPost';

import styles from './styles.module.scss';

import { _getPosts } from 'api/queries';

/* eslint-disable react/prefer-stateless-function */
const HomePage = (props) => (
  <Fragment>
    <div className={cx(styles.wrapper, styles.header)}>
      <div><FormattedMessage {...messages.postTitle} /></div>
      <div><FormattedMessage {...messages.postAuthor} /></div>
    </div>

    <Query query={_getPosts} fetchPolicy='cache-and-network'>
      {({ loading, error, data }) => {
        if (loading) return <FormattedMessage {...messages.loading} />;
        if (error) return <FormattedMessage {...messages.error} values={{ msg: error.message }} />;

        return (         
          data.posts.map((post, key) => (
            <div className={styles.wrapper} {...{key}}>
              <div>
                {post.title}
              </div>
              <div>
                {post.author.firstName}
              </div>
            </div>
          ))
        );
        
      }}
    </Query>

    <AddPost />

  </Fragment>
);

export default HomePage;