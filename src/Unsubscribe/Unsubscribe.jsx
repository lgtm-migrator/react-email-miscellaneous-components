import React from 'react';

import { styles } from './styles';

// TODO: try prop-types pkg for component attributes

import Link from '../Link/Link.jsx';

const Unsubscribe = ({ hrefUnsub, label, styles }) => (

  <Link href={hrefUnsub} style={styles} data-testid="unsubscribeTest">
    {label}
  </Link>
  
);

export default Unsubscribe;

{/* <a 
    href={hrefUnsub} 
    style={styles} 
    data-testid="unsubscribeTest">
      {label}    
  </a> */}