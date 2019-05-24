/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LocaleToggle from 'containers/LocaleToggle';
import GlobalStyle from '../../global-styles';

import styles from './styles.module.scss';

export default function App() {
  return (
    <Fragment>
      <div className={styles.topBar}>
        <FormattedMessage {...messages.language} />
        <LocaleToggle />
      </div>
      <div className={styles.wrapper}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <GlobalStyle />
    </Fragment>
  );
}
