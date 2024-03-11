import ForgotPasswordForm from '@/components/forms/forgot-password-form';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <main className='flex h-screen min-h-screen w-full items-center'>
      <div className='mx-auto flex flex-col rounded-xl bg-white p-4'>
        <ForgotPasswordForm />
        <div className='mt-4 flex justify-between'>
          <Link
            href='/'
            className='font-semibold text-gray-400 hover:underline'
          >
            Login
          </Link>
          <Link
            href='/signup/'
            className='font-semibold text-gray-400 hover:underline'
          ></Link>
        </div>
      </div>
    </main>
  );
}
