import React from 'react';
import PropTypes from 'prop-types';
import styles from './book.module.scss';

const book = () => (
  <div className={styles.book}>
    book Component
  </div>
);

book.propTypes = {};

book.defaultProps = {};

export default book;
