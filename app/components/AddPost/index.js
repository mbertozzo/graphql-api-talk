import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { Query, Mutation } from "react-apollo";
import { _getPosts, _getAuthors } from 'api/queries';
import { _addPost } from 'api/mutations';

import styles from './styles.module.scss';

const AddPost = (props) => {

  const { intl } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');

  return (

    <div className={styles.form}>
      <input
        type="text"
        name="title"
        placeholder={intl.formatMessage(messages.title)}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="content"
        placeholder={intl.formatMessage(messages.content)}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        name="authorId"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
      >
        <option value="">{intl.formatMessage(messages.author)}</option>

        <Query query={_getAuthors} fetchPolicy='cache-and-network'>
          {({ loading, error, data }) => {
            if (loading) return <option value="">{intl.formatMessage(messages.loading)}</option>
            if (error) return <option value="">{intl.formatMessage(messages.error)}</option>

            return (
              data.authors.map((item, key) => <option value={item.id} {...{key}}>{item.firstName}</option>)
            )

          }}
        </Query>

      </select>

      <Mutation 
        mutation={_addPost}
        refetchQueries={() => [{query: _getPosts}]}
      >
        {(addPost, { loading }) => {
          if (loading) return <FormattedMessage {...messages.loading} />

          return (
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
              {intl.formatMessage(messages.cto)}
            </button>
          )
        }}
      </Mutation>

    </div>

  );
}

export default injectIntl(AddPost);
