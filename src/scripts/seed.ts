import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const films = [
  {
    name: "Sicario",
    releaseDate: new Date("2015-05-19"),
  },
  {
    name: "Dune",
    releaseDate: new Date("2021-10-22"),
  },
  {
    name: "Dune: Part Two",
    releaseDate: new Date("2023-11-20"),
  },
  {
    name: "Little Women",
    releaseDate: new Date("2019-12-25"),
  },
];

const actors = [
  {
    firstName: "Josh",
    lastName: "Brolin",
    films: films.filter(({ name }) =>
      ["Sicario", "Dune", "Dune: Part Two"].includes(name)
    ),
  },
  {
    firstName: "Timothée",
    lastName: "Chalamet",
    films: films.filter(({ name }) =>
      ["Dune", "Dune: Part Two"].includes(name)
    ),
  },
  {
    firstName: "Florence",
    lastName: "Pugh",
    films: films.filter(({ name }) =>
      ["Dune: Part Two", "Little Women"].includes(name)
    ),
  },
];

const seed = async () => {
  actors.forEach(async (actor) => {
    await prisma.actor.create({
      data: {
        ...actor,
        films: {
          connectOrCreate: actor.films.map((film) => ({
            where: { name: film.name },
            create: { ...film },
          })),
        },
      },
    });
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
