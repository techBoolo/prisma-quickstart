# Prisma Quickstart

- initialize a node app

```
  mkdir demo && cd demo
  npm init -y
```

- install and initialize typescript
   
```
  npm i typescript ts-node @types/node --save-dev
  npx tsc --init
```

- install prisma cli as dev dependency

```
  npm i prisma --save-dev
```

- set up prisma

```
  npx prisma init --datasource-provider sqlite 
  // sqlite is best to experiment with prisma without installing and setting up postgresql or mysql, 
```

- model the data

see the file `./prisma/schema.prisma` for a sample model

- migrate the prisma model
```
  npx prisma migrate dev --name "init, add any details of the migration"
```

Migration for the first time will install @prisma/client and create the underlying database , and create api for the client

- Finally

we can execute any CRUD operation,

see the typescript file `script.ts`

