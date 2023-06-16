## Install

```sh
yarn
```

## Getting Started

### Database

Prisma is used so the usual seed, studio, generate commands are available.

#### Generate

If you change the schema (or run for the first time) you should run generate to regenerate typings

```sh
yarn prisma generate
```

#### Create

Sync the schema with the db, if the db doesn't exist create it (see path in .env)

```sh
yarn prisma db push
```

#### Seed

Seed the db with some test data, see `seed.ts`

```sh
yarn prisma db seed
```

#### Studio

Browse & edit the data

```sh
yarn prisma studio
```

### Web

Run the development server

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
