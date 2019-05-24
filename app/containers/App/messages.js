/*
 * App Messages
 *
 * This contains all the text for the App container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.App';

export default defineMessages({
  language: {
    id: `${scope}.language`,
    defaultMessage: 'Choose language',
  },
});
