## Important Note

How is a Nextjs 14 project, you have to use node version 20 or superior

## Getting Started

1. Clone project

```
git clone https://github.com/NodUp/salt-control.git
```

2. Install all dependencies

```
npm i
```

3. Creat a postgres database

```
db name: salt
user: postgresql
password: 123
```

4. Run migrations

```
npx prisma migrate dev --name init
```

5. Run seeds

```
npx prisma db seed
```

6. Run manual seed

```
Open seed.tsx
copy a comment script
replace " symbol for '
run on postgresql
```
   
7. Run project

```
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
