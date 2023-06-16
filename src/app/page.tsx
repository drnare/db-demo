import { PrismaClient } from "@prisma/client";

const Home = async () => {
  const getFilms = async () => {
    "use server";
    const prisma = new PrismaClient();
    return prisma.film.findMany({ include: { actors: true } });
  };

  const films = await getFilms();

  return (
    <>
      <h1>Films</h1>

      {films.map((film) => (
        <>
          <h2 key={film.id}>{film.name}</h2>
          <p>
            <small>
              Released{" "}
              {film.releaseDate.toLocaleDateString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </p>
          <p>
            Stars:{" "}
            {film.actors
              .map((actor) => `${actor.firstName} ${actor.lastName}`)
              .join(", ")}
          </p>
        </>
      ))}
    </>
  );
};

export default Home;
