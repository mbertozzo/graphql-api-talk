/*
 * AddPost Messages
 *
 * This contains all the text for the AddPost component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.AddPost';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Title',
  },
  content: {
    id: `${scope}.content`,
    defaultMessage: 'Content',
  },
  author: {
    id: `${scope}.author`,
    defaultMessage: 'Select Author',
  },
  cto: {
    id: `${scope}.cto`,
    defaultMessage: 'Click to Add',
  },
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading, please wait...',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Ops, an error occurred.',
  },
});
