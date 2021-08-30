import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes

const Unsubscribe = ({ hrefUnsub }) => (
  <a 
    href={hrefUnsub} 
    style={styles.unsubscribe} 
    data-testid="unsubscribeTest">
    unsubscribe
  </a>
);

export default Unsubscribe;
