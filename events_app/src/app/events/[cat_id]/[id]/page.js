import { fetchEventsCatData } from "@/app/page";
import Image from "next/image";
const SingleEventPage = async ({ params }) => {
  // get the event with the same id
  const { allEvents } = await fetchEventsCatData();
  const { cat_id } = params;
  const { id } = params;
  // filter returns an array
  const events = allEvents.filter((e) => e.id == id);
  console.log(events);
  return (
    <div>
      {events.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <Image src={e.image} alt={e.title} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default SingleEventPage;

// generate all dynamic paths
export async function generateStaticParams() {
  const { allEvents } = await fetchEventsCatData();
  // get the id and city field
  const paths = allEvents.map((e) => {
    return {
      params: { cat_id: e.city.toString(), id: e.id.toString() },
    };
  });
  return paths;
}
