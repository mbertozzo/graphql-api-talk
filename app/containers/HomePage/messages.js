/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.HomePage';

export default defineMessages({
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading...',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Ops, an error occurred: {msg}',
  },
  postTitle: {
    id: `${scope}.postTitle`,
    defaultMessage: 'Post Title',
  },
  postAuthor: {
    id: `${scope}.postAuthor`,
    defaultMessage: 'Post Author',
  },
});
