import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import style from './HomePage.module.css';


function HomePage() {
  const images = [
    { url: "https://image2.thematicnews.com/uploads/images/45/16/82/92018/10/11/e5c834203f.jpg" },
    { url: "https://focus.ua/static/storage/thumbs/920x465/7/30/ab2346e6-7648346b195728ad88146e295f361307.jpg?v=8408_1" },
    { url: "https://www.kp40.ru/news_images/anons/29622.jpg" },
    { url: "https://funart.pro/uploads/posts/2019-11/1574116213_1.jpg" },
  ];

  return ( 
    <>
    < div className={style.home}>
      <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '0px' }}
        width={'100%'}
        height={'100%'}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
        slideDuration={ 2 }
    />
      </div >
    </>
)
}

export default HomePage;