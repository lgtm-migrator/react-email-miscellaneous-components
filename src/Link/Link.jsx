import React from 'react';

// TODO decide what to do with data-testid thing
const Link = ({ href, style, children, target="_blank" }) => (
  <a 
    href={href} 
    style={style} 
    target={target} 
    data-testid="newsletterHrefTest">
    {children}
  </a>
);

export default Link;
