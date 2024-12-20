import { fetchEventsCatData } from "../page";
import Image from "next/image";
import Link from "next/link";
const EventsPage = async () => {
  const { events_categories } = await fetchEventsCatData();

  return (
    <div className="events_page">
      {events_categories.map((e) => (
        <Link className="card" key={e.id} href={`events/${e.id}`}>
          <Image src={e.image} alt={e.title} width={400} height={400} />
          <h2>{e.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
