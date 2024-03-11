import UserForm from '@/components/forms/user-form';
import PathComponent from '@/components/path-component';
import { findAllRoles } from '@/actions/user-action';

export default async function AddUser() {
  const roles = await findAllRoles();

  return (
    <div>
      <PathComponent />
      <UserForm user={null} roles={roles} />
    </div>
  );
}
