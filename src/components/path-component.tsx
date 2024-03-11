'use client';

//import { usePathname } from 'next/navigation';
//import HomeIcon from '@/assets/icons/home-icon';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import BackIcon from '@/assets/icons/back';

function PathComponent() {
  //const pathname = usePathname();
  const router = useRouter();

  //let novaString = pathname.replace(/\//g, ' > ').replace(/"/g, '');

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-2'></div>
      <div>
        <Button
          variant='secondary'
          className='flex flex-row items-center justify-start'
          onClick={() => router.back()}
        >
          <BackIcon />
          <span className='ml-2'>Voltar</span>
        </Button>
      </div>
    </div>
  );
}

export default PathComponent;
