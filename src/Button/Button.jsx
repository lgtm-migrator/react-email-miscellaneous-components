import React from 'react';

import '../Link/Link.jsx';

const ButtonLink = ({href, className, style, label}) => (
  <Link href={href} className={className} style={style}>{label}</Link>
);

export default ButtonLink;

// <a class="pc-fb-font" href="http://example.com" 
// style="line-height: 1.5; text-decoration: none; margin: 0; padding: 13px 17px; white-space: nowrap; border-radius: 8px; font-weight: 500; display: inline-block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; cursor: pointer; background-color: #1595E7; color: #ffffff; border: 1px solid #1595E7;">
//   Shop now
//   </a> 
        
