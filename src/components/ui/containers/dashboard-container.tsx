'use client';

import { useEffect, useState } from 'react';
import { getSummaryProducts } from '@/actions/dashboard';
import { db } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';
import Link from 'next/link';

export default function DashBoardContainer() {
  const [products, setProducts] = useState([]);
  const [lastUpdateId, setLastupdateId] = useState('');

  const load = async () => {
    const products: any = await getSummaryProducts(new Date().getMonth());
    setProducts(products);
  };

  useEffect(() => {
    load();
    onValue(ref(db, 'operation/time'), (snapshot) => {
      load();
    });
    onValue(ref(db, 'operation/id'), (snapshot) => {
      setLastupdateId(snapshot.val());
    });
  }, []);

  return (
    <div className='mx-auto flex flex-wrap justify-center gap-2 rounded-lg '>
      {products.map((i: any, index: any) => (
        <div key={index}>
          <div
            className={`flex h-[235px] w-[180px] max-w-[180px] flex-col rounded-lg border ${i.product_id === lastUpdateId ? 'border-sky-800/80' : ''} p-2`}
          >
            <div className='flex h-[60px] flex-col justify-between'>
              <Link
                className='mx-auto mb-1 text-sm font-bold hover:text-sky-800/80'
                href={`/admin/reports/${i.product_id}`}
              >
                {i.name}
              </Link>
              <span className='text-sm font-semibold text-green-700'>{`Total: ${i.total}`}</span>
            </div>
            <div className='mt-1 rounded-md border p-1'>
              <span className='text-sm font-semibold text-sky-800'>
                Entrada
              </span>
              <div className='flex flex-row gap-1'>
                <span className='text-sm'>Flutuante:</span>
                <span className='text-sm'>{i.entrada_flutuante}</span>
              </div>
              <div className='flex flex-row gap-1'>
                <span className='text-sm'>Local:</span>
                <span className='text-sm'>{i.entrada_local}</span>
              </div>
            </div>

            <div className='mt-1 rounded-md border p-1'>
              <span className='text-sm font-semibold text-red-800'>Saída</span>
              <div className='flex flex-row gap-1'>
                <span className='text-sm'>Programada:</span>
                <span className='text-sm'>{i.saida_programada}</span>
              </div>
              <div className='flex flex-row gap-1'>
                <span className='text-sm'>Efetuada:</span>
                <span className='text-sm'>{i.saida_efetivada}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
