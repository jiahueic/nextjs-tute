import { fetchEventsCatData } from "../page";
import Image from "next/image";
import Link from "next/link";
const EventsPage = async () => {
  const { events_categories } = await fetchEventsCatData();

  return (
    <div>
      <h1>Events page</h1>
      {events_categories.map((e) => (
        <Link key={e.id} href={`events/${e.id}`}>
          <Image src={e.image} alt={e.title} width={200} height={200} />
          <h2>{e.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
