import React from 'react';

// import Table from "../Table/Table.jsx"


// import { styles } from './styles';
// import config from './config';


import Link from '../Link/Link.jsx';
import Image from '../Image/Image.jsx';

const Logo = ({href, imageLink, styles}) => (

    <a href={config.link} title='' className='' target="_blank" style={styles.title}>
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
