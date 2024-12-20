import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ events_categories }) => {
  return (
    <div className="home_body">
      {events_categories.map((e) => (
        <Link className="card" key={e.id} href={`events/${e.id}`}>
          <div className="image">
            <Image src={e.image} alt={e.title} width={600} height={300} />
          </div>
          <div>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
