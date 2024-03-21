import UserForm from '@/components/forms/user-form';
import PathComponent from '@/components/path-component';
import { getAllRoles } from '@/actions/roles';
import { findById } from '@/actions/user-action';
import { getAllStates } from '@/actions/states';
import { getAllCities } from '@/actions/cities';
import { getAllStatus } from '@/actions/status';

export default async function EditUser({ params }: { params: { id: string } }) {
  const user = await findById(params.id);
  const roles = await getAllRoles();
  const states = await getAllStates();
  const cities = await getAllCities(user?.person[0].stateId);
  const status = await getAllStatus();

  return (
    <div>
      <PathComponent />
      <UserForm
        user={user}
        roles={roles}
        states={states}
        cities={cities}
        status={status}
        context='admin'
      />
    </div>
  );
}
