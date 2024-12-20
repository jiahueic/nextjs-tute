import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ events_categories }) => {
  return (
    <main>
      <h1>Welcome to the Events App</h1>
      {events_categories.map((e) => (
        <Link key={e.id} href={`events/${e.id}`}>
          <Image src={e.image} alt={e.title} width={200} height={200} />
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </Link>
      ))}
    </main>
  );
};
