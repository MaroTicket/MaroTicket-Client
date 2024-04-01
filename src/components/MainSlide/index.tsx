import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };
  // TODO: 슬라이드 API 연동
  return (
    <Slider {...settings}>
      <div className='border'>
        <h3>제목1</h3>
        <p>날짜</p>
        <div className='h-96 overflow-hidden'>
          <img src='' alt='제목1' />
        </div>
      </div>
      <div className='border'>
        <h3>제목2</h3>
        <p>날짜</p>
        <div className='h-96 overflow-hidden'>
          <img src='' alt='제목2' />
        </div>
      </div>
      <div className='border'>
        <h3>제목3</h3>
        <p>날짜</p>
        <div className='h-96 overflow-hidden'>
          <img src='' alt='제목3' />
        </div>
      </div>
      <div className='border'>
        <h3>제목4</h3>
        <p>날짜</p>
        <div className='h-96 overflow-hidden'>
          <img src='' alt='제목4' />
        </div>
      </div>
      <div className='border'>
        <h3>제목5</h3>
        <p>날짜</p>
        <div className='h-96 overflow-hidden'>
          <img src='' alt='제목5' />
        </div>
      </div>
    </Slider>
  );
}
