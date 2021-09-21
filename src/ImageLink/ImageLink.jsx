import React from 'react';

import Link from '../Link/Link.jsx';
import Image from '../Image/Image.jsx'


const imgProps = (props) => {
  let { src, alt, style, height, width, className } = props; 

  return {
    src: src,
    alt: alt,
    style: style,
    height: height,
    width: width,
    className: className
  }
}


const getLinkProps = (props) => {
  let { href, target, style } = props;

  return {
        href: href,        
        style: style,
        target: target        
  };
}


// TODO stuff, related to styles is highly debated

const ImageLink = (props) => {
  let link = getLinkProps(props);
  let image = imgProps(props);

  return (
    <Link {...link} >
      <Image {...image} />
    </Link>  
  );
}

// const ImageLink = ({href, styles, src, alt }) => (

//   <Link href={href} style={styles.followSocial} data-testid="tableLeftHrefTest">
//     <Image {...imgProps()} />
//   </Link>  

// );


export {
  imgProps,
  getLinkProps,
  ImageLink
}
// export default ImageLink;

{/* <a href={href} target="_blank" style={styles.followSocial} data-testid="tableLeftHrefTest">
    <img
      src={src}
      alt={alt}
      style={styles.followSocialImg}
      height={24}
      width={24}
      className=''
      data-testid="tableLeftImgTest"
    />
  </a> */}


{*  <a 
      href={leftHref} 
      data-testid="sponsorHrefTest" 
      title='' 
 className='' 
      target="_blank" 
      style={styles.title}>
        <img 
          alt="" 
          src={leftSrc} 
          width={150} 
          data-testid="sponsorSrcTest" 
          style={styles.image} 
          className="mcnImage" />
    </a> */}
