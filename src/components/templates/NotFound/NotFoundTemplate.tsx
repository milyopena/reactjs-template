import React from 'react';

import {BackLink, Typography} from 'components/ui/atoms';

import styles from './NotFoundTemplate.module.scss';

export const NotFoundTemplate = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <Typography variant="h2" color="#999">
        Page Not Found
      </Typography>
      <Typography variant="h2" color="#999">
        The page you are looking for doesn't exist.
      </Typography>
      <BackLink navigateTo="/" text="Go back to the homepage" />
    </div>
  );
};
