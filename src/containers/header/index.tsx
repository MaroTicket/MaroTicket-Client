import MainLogo from '@/components/MainLogo';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2 className='sr-only'>메뉴바</h2>
      <div className='bg-red-50 px-56 py-10'>
        <div className='flex justify-between'>
          <h2 className='sr-only'>로그인 메뉴</h2>
          <MainLogo />
          <ul className='flex gap-10 opacity-80'>
            <li>
              <Link className='inline-flex flex-col items-center' to='/user/login'>
                <i className='fa fa-user text-2xl opacity-60' aria-hidden='true'></i>
                로그인
              </Link>
            </li>
            <li>
              <Link className='inline-flex flex-col items-center' to='/user/join'>
                <i className='fa fa-user-plus text-2xl opacity-60' aria-hidden='true'></i>
                회원가입
              </Link>
            </li>
            <li>
              <Link className='inline-flex flex-col items-center' to='/user/join'>
                <i className='fa fa-question-circle text-2xl opacity-60' aria-hidden='true'></i>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='sr-only'>메인 메뉴</h2>
          <ul className='mt-5 flex justify-center gap-10'>
            <li>
              <Link to='/plays/current'>현재 상연작</Link>
            </li>
            <li>
              <Link to='/plays/upcoming'>상연 예정작</Link>
            </li>
            <li>
              <Link to='/play/past'>지난 상연작</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
