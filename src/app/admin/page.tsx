import DashBoardContainer from '@/components/containers/dashboard-container';

export default async function DashBoard() {
  return (
    <div className='m-auto flex h-[100%] w-[100%] flex-col'>
      <div className='my-4 flex justify-center rounded-lg border'>
        <span className='text-2xl font-semibold text-sky-800/80'>
          Mês de {new Date().toLocaleString('default', { month: 'long' })}
        </span>
      </div>
    </div>
  );
}
