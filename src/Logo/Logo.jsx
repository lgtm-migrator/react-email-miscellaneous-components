import React from 'react';




// import { styles } from './styles';
// import config from './config';



// import Link from '../Link/Link.jsx';
// import Image from '../Image/Image.jsx';

// import ImageLink from '../ImageLink/ImageLink.jsx';

const Logo = ({href, imageLink, styles}) => (

    <a href={href} 
      title='' 
      className='' 
      target="_blank" 
      style={styles.title}>

        <img
          align="center"
          alt=""
          src={imageLink}
          width={600}
          style={styles.img}
          className="mcnImage"
        />
    </a>

);

export default Logo;
