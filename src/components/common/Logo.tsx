import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={`${className} bg-main-logo bg-contain bg-center bg-no-repeat`}>
      <Link className='block h-full w-full' to='/'>
        <span className='sr-only'>마로티켓</span>
      </Link>
    </h1>
  );
}
