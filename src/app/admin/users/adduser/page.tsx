import UserForm from '@/components/forms/user-form';
import PathComponent from '@/components/path-component';
import { findAllRoles } from '@/actions/user-action';
import { getAllStates } from '@/actions/states';
import { getAllStatus } from '@/actions/status';

export default async function AddUser() {
  const roles = await findAllRoles();
  const states = await getAllStates();
  const status = await getAllStatus();

  return (
    <div>
      <PathComponent />
      <UserForm
        user={null}
        roles={roles}
        states={states}
        cities={[]}
        status={status}
      />
    </div>
  );
}
