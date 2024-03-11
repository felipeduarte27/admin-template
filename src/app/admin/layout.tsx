import HeaderBar from '@/components/ui/containers/header-bar';
import SideBar from '@/components/ui/containers/side-bar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen'>
      <HeaderBar />
      <div className='flex w-full flex-row'>
        <SideBar />
        <div className='m-4 min-h-[80vh] w-full rounded-lg border bg-white px-4 pb-8 pt-4 shadow-lg'>
          {children}
        </div>
      </div>
    </div>
  );
}
