import React from 'react';

// import { Img } from 'react-image';
// const myComponent = () => <Img src="https://www.example.com/foo.jpg" />

const Image = (props) => (
    <img
        align="center"
        alt=""
        src={config.imgLink}
        width={600}
        style={styles.img}
        className="mcnImage"
    />

);

export default Image;


{/* <img
src={src}
alt={alt}
style={styles.followSocialImg}
height={24}
width={24}
className=''
data-testid="tableLeftImgTest"
/> */}

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