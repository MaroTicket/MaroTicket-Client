import LinkedBanner from '@/components/LinkedBanner';
import MainSlider from '@/components/MainSlide';

export default function Main() {
  return (
    <div className='mt-5'>
      <h2 className='sr-only'>연극 종류</h2>
      <MainSlider />
      <LinkedBanner />
    </div>
  );
}
