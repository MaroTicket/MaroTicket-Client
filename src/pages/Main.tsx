import LinkedBanner from '@/components/main/LinkedBanner';
import MainSlider from '@/components/main/MainSlider';

export default function Main() {
  return (
    <div className='mt-5'>
      <h2 className='sr-only'>연극 종류</h2>
      <MainSlider />
      <LinkedBanner />
    </div>
  );
}
