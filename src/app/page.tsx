'use client';
import { SetCountValue } from '@/redux/counterSlice';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { count } = useSelector((s: any) => s.counter);
  const dispatch = useDispatch();

  return (
    <div className='flex h-screen justify-center items-center flex-col gap-10'>
      <h1 className='text-6xl font-bold text-center'>Count: {count}</h1>
      <div className='flex gap-5'>
        <button
          className='bg-gray-700 text-white px-5 py-2'
          onClick={() => {
            dispatch(SetCountValue(count + 1));
          }}
        >
          Inclrement
        </button>
        <button
          className='bg-gray-700 text-white px-5 py-2'
          onClick={() => {
            dispatch(SetCountValue(count - 1));
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
