import React from 'react';

const Link = ({href, style, label, target="_blank"}) => (
  <a 
    href={href} 
    style={style} 
    target={target} 
    data-testid="newsletterHrefTest">
    {label}
  </a>
);

export default Link;
