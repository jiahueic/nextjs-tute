import { fetchEventsCatData } from "@/app/page";
import Image from "next/image";

const EventInCityPage = async ({ params }) => {
  const { cat_id } = params;
  const { allEvents } = await fetchEventsCatData();

  // Filter events based on the city
  const events = allEvents.filter(
    (e) => e.city.toLowerCase() === cat_id.toLowerCase()
  );

  return (
    <div>
      {events.map((e) => (
        <div key={e.id}>
          <Image src={e.image} alt={e.title} width={500} height={300} />
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventInCityPage;

// Get all city names in a list of params
export async function generateStaticParams() {
  const { events_categories } = await fetchEventsCatData();
  const paths = events_categories.map((e) => {
    return { cat_id: e.id.toString() }; // dynamic param is cat_id
  });
  console.log(paths);
  const output = paths.map((p) => {
    return {
      params: p,
    };
  });
  console.log(output);
  return output;
}
