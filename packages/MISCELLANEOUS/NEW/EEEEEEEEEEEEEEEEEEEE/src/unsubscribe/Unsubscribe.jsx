import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes

const Unsubscribe = ({ hrefUnsub, label }) => (
  <a 
    href={hrefUnsub} 
    style={styles.unsubscribe} 
    data-testid="unsubscribeTest">
      {label}    
  </a>
);

export default Unsubscribe;
