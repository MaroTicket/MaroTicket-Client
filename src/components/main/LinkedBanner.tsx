import { Link } from 'react-router-dom';

export default function LinkedBanner() {
  return (
    <div className='mt-8 px-5 text-center'>
      <ul className='inline-flex w-1/3 justify-center gap-6 rounded-md p-5 shadow-xl'>
        <li className='relative p-5 after:absolute after:-right-3 after:top-0 after:block after:h-full after:w-[1px] after:bg-gray-300 after:content-[""]'>
          <Link to='play/current'>
            <span className='flex flex-col'>
              <span>넘치는 신작!</span>
              <span>
                <span className='text-blue-300'>현재 상연작</span> 보러가기!
              </span>
            </span>
          </Link>
        </li>
        <li className='p-5'>
          <Link to='play/upcoming'>
            <span className='flex flex-col'>
              <span>기대되는 신작!</span>
              <span>
                <span className='text-red-300'>상연 예정작</span>
                보러가기!
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
