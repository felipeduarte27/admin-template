import React from 'react';

import Avatar from '@/assets/avatar';
import Image from 'next/image';
import { logout } from '@/actions/session';

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
      <div className='flex h-[100px] w-[300px] items-center justify-center overflow-hidden p-1'>
        <Image src='/logo.jpeg' width='200' height='100' alt='logo' />
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
            <DropdownMenuItem onClick={logout}>Alterar senha</DropdownMenuItem>
            <form
              action={logout}
              className='mb-1 cursor-pointer rounded-sm p-1 hover:bg-slate-100'
            >
              <button
                className='ml-2 mt-1 flex w-full items-center text-sm'
                type='submit'
              >
                Sair
              </button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderBar;
