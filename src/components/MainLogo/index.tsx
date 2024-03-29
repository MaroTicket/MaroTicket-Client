import { Link } from 'react-router-dom';

export default function MainLogo() {
  return (
    <h1 className='bg-main-logo h-8 w-32 bg-no-repeat'>
      <Link className='block h-full w-full' to='/'>
        <span className='sr-only'>마로티켓</span>
      </Link>
    </h1>
  );
}
