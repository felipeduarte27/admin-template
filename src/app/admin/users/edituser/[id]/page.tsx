import UserForm from '@/components/forms/user-form';
import PathComponent from '@/components/path-component';
import { findAllRoles } from '@/actions/user-action';
import { findById } from '@/actions/user-action';

export default async function EditUser({ params }: { params: { id: string } }) {
  const user = await findById(params.id);
  const roles = await findAllRoles();
  return (
    <div>
      <PathComponent />
      <UserForm user={user} roles={roles} />
    </div>
  );
}
