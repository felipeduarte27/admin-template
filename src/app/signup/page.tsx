import SignUpForm from '@/components/forms/sign-up-form';
import Link from 'next/link';

export default function SignUp() {
  return (
    <main className='flex h-screen min-h-screen w-full items-center'>
      <div className='mx-auto flex flex-col rounded-xl bg-white p-4'>
        <SignUpForm />
        <div className='mt-4 flex justify-between'>
          <Link
            href='/'
            className='font-semibold text-gray-400 hover:underline'
          >
            Login
          </Link>
          <Link
            href='/forgotpassword/'
            className='font-semibold text-gray-400 hover:underline'
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </main>
  );
}
