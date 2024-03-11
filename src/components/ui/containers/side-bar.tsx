'use client';

import React, { useState } from 'react';
import Collapse from '../collapse';
import HomeIcon from '@/assets/icons/home-icon';
import Link from 'next/link';

const array = [
  { href: '/admin/products/productEntry', title: 'Entrada' },
  { href: '/admin/products/productDeparture', title: 'Saída' },
];

const SideBar = () => {
  const [indexCollapse, setIndexCollapse] = useState(0);
  return (
    <div className='m-4 flex h-[50vh] w-[300px] flex-col rounded-lg border bg-white p-2 shadow-lg'>
      <div className='justify-left mb-2 flex items-center p-1'>
        <HomeIcon />
        <Link
          href='/admin'
          className={`hover:text-sky-800 ${indexCollapse === 0 ? 'font-semibold text-sky-800' : ''}`}
          onClick={() => {
            setIndexCollapse(0);
          }}
        >
          <span className='ml-4'>Página Inicial</span>
        </Link>
      </div>
      <Collapse
        items={[]}
        title='Usuários'
        hrefTitle='/admin/users'
        icon='person'
        index={1}
        indexCollapse={indexCollapse}
        setIndexCollapse={setIndexCollapse}
      />
      <Collapse
        items={array}
        title='Produtos'
        hrefTitle='/admin/products'
        index={2}
        indexCollapse={indexCollapse}
        setIndexCollapse={setIndexCollapse}
      />
    </div>
  );
};

export default SideBar;
