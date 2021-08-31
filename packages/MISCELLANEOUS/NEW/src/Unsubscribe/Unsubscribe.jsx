import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes


import Link from '../Link/Link.jsx';

const Unsubscribe = ({ hrefUnsub, label, styles }) => (
  <a 
    href={hrefUnsub} 
    style={styles} 
    data-testid="unsubscribeTest">
      {label}    
  </a>
);

export default Unsubscribe;
