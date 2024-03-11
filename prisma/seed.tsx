import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.roles.createMany({
    data: [
      {
        name: 'COMUM',
      },
      {
        name: 'ADMIN',
      },
    ],
  });

  await prisma.centers.createMany({
    data: [
      {
        name: 'Centro de Distribuição de Santa Catarina',
      },
    ],
  });

  await prisma.products.createMany({
    data: [
      {
        name: 'TÊXTIL REF. 25KGS',
      },
      {
        name: 'MARFIM REF. 30/1',
      },
      {
        name: 'MARFIM REF. 10/1',
      },
      {
        name: 'MARFIM CHURRASCO 10/1',
      },
      {
        name: 'PLUMA REF. COM IODO 25KGS',
      },
      {
        name: 'PLUMA REF. SEM IODO 25KGS',
      },
      {
        name: 'DU REBANHO MOÍDO DE 25KGS',
      },
      {
        name: 'DU REBANHO TRITURADO DE 25KGS',
      },
      {
        name: 'MIMOSAL MOÍDO C-IODO 25KGS',
      },
      {
        name: 'MIMOSAL MOIDO  S-IODO 25 KGS',
      },
      {
        name: 'MIMOSAL PENEIRADO COM IODO 25KGS',
      },
      {
        name: 'MIMOSAL PENEIRADO SEM IODO 25KGS',
      },
      {
        name: 'PLUMA PENEIRADO COM IODO 25KGS',
      },
      {
        name: 'PLUMA PENEIRADO SEM IODO 25KGS',
      },
      {
        name: 'FRITZ & FRIDA Moído 30x1',
      },
      {
        name: 'FRITZ & FRIDA CHURRASCO 15X1',
      },
      {
        name: 'FRITZ & FRIDA REFINADO 10x1',
      },
      {
        name: 'SASHÊ MARFIM DE 1gr',
      },
      {
        name: 'PLUMA GRANULADO  SEM IODO 25KGS',
      },
      {
        name: 'BIG BAG REFINADO 1000KGS - SEM IODO',
      },
      {
        name: 'BIG BAG MOÍDO 1000 KGS',
      },
      {
        name: 'MIMOSAL MOÍDO DE 30/1 KG',
      },
      {
        name: 'MIMOSAL GROSSO DE 25KGS SEM IODO',
      },
      {
        name: 'PLUMA REF. SEM IODO 20KGS',
      },
      {
        name: 'PLUMA pen.. SEM IODO 20KGS',
      },
      {
        name: 'PLUMA PARRILHA COM IODO',
      },
      {
        name: 'PLUMA GRANULADO COM IODO 25KGS ',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//select 'insert into "Stocks" values (gen_random_uuid(),"',(select c.id as center_id from "Centers" c),'",0,"',p.id as product_id,'");' from "Products" p
