import React from 'react';

import Avatar from '@/assets/avatar';
import Link from 'next/link';
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const HeaderBar = () => {
  return (
    <div className='flex h-[100px] w-full flex-row items-center justify-between border bg-white shadow-lg'>
      <div className='flex w-[300px] items-center justify-center p-1'>
        <Image src='/logo.jpeg' width='200' height='200' alt='logo' />
      </div>
      <div className='flex w-[300px] items-center justify-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className='p-2 outline-none'>
            <span className='h-[80px] w-[30px]'>
              <Avatar />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem>Alterar senha</DropdownMenuItem>
            <Link href='/'>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderBar;
