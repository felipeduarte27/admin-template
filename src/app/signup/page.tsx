import UserForm from '@/components/forms/user-form';
import PublicFooterForm from '@/components/ui/containers/public-footer-form';

import { getAllRoles } from '@/actions/roles';
import { getAllStates } from '@/actions/states';
import { getAllStatus } from '@/actions/status';

import { ComponentContainer } from '@/components/ui/containers/component-container';
import { MainContainer } from '@/components/ui/containers/main-container';

export default async function SignUp() {
  const roles = await getAllRoles();
  const states = await getAllStates();
  const status = await getAllStatus();

  return (
    <MainContainer>
      <ComponentContainer>
        <UserForm
          user={null}
          roles={roles}
          states={states}
          cities={[]}
          status={status}
          context='login'
        />
        <PublicFooterForm
          routes={[
            { path: '/', name: 'Login' },
            { path: '/forgotpassword', name: 'Esqueceu a senha?' },
          ]}
        />
      </ComponentContainer>
    </MainContainer>
  );
}
