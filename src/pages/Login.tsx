import Logo from '@/components/common/Logo';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className='flex h-screen items-center justify-center'>
      <div className='w-1/2 p-10 shadow-md'>
        <Logo className='m-auto h-32 w-56' />
        <fieldset className='m-auto w-4/5'>
          <legend className='sr-only'>로그인</legend>
          <div>
            <div className='border-b'>
              <input type='text' className='w-full p-3' placeholder='아이디' />
            </div>
            <div className='border-b'>
              <input type='password' className='w-full p-3' placeholder='비밀번호' />
            </div>
          </div>
          <div className='mt-2 inline-flex items-center justify-center text-sm'>
            <input type='checkbox' id='remember' className='mr-1 checked:bg-red-500' />
            <label htmlFor='remember' className='flex items-center'>
              로그인 상태유지
            </label>
          </div>
          <button type='submit' className='mt-10 w-full rounded-md bg-red-500 p-3 text-lg text-white'>
            로그인
          </button>
        </fieldset>
        <div className='mt-5 flex justify-center gap-3'>
          <Link to='/account/find-password' className='text-sm text-gray-400'>
            비밀번호 찾기
          </Link>
          <Link to='/account/find-id' className='text-sm text-gray-400'>
            아이디 찾기
          </Link>
          <Link to='/user/join' className='text-sm text-gray-400'>
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}
