import UserForm from '@/components/forms/user-form';
import Link from 'next/link';
import { getAllRoles } from '@/actions/roles';
import { getAllStates } from '@/actions/states';
import { getAllStatus } from '@/actions/status';

export default async function SignUp() {
  const roles = await getAllRoles();
  const states = await getAllStates();
  const status = await getAllStatus();
  return (
    <main className='flex h-screen min-h-screen w-full items-center'>
      <div className='mx-auto flex flex-col rounded-xl bg-white p-4'>
        <UserForm
          user={null}
          roles={roles}
          states={states}
          cities={[]}
          status={status}
          context='login'
        />
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
