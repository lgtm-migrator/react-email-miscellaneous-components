import React from 'react';

// import { Img } from 'react-image';
// const myComponent = () => <Img src="https://www.example.com/foo.jpg" />
// TODO replace our component with react-image component

// let imageProps = {
//     src: ,
//     alt: ,
//     style: ,
//     height: ,
//     width: ,
//     className: ,
//     data-testid: "tableLeftImgTest"
// };


const Image = ({src, styles, className, height, width, alt="", }) => (
    <img
        align="center"
        alt={alt}
        src={src}
        width={600}
        style={styles}
        className={className}
    />

);

export default Image;

{/* <img
align="center"
alt=""
src={src}
width={600}
style={styles}
className="mcnImage"
/> */}

// {/* <img
// src={src}
// alt={alt}
// style={styles.followSocialImg}
// height={24}
// width={24}
// className=''
// data-testid="tableLeftImgTest"
// /> */}

// import React, { Suspense } from 'react'
// import { useImage } from 'react-image'
 
// function MyImageComponent() {
//   const { src } = useImage({
//     srcList: 'https://www.example.com/foo.jpg',
//   })
 
//   return <img src={src} />
// }
 
// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }