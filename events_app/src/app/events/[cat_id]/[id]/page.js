import { fetchEventsCatData } from "@/app/page";
import SingleEvent from "@/components/events/singleEvent";

const SingleEventPage = async ({ params }) => {
  // get the event with the same id
  const { allEvents } = await fetchEventsCatData();
  // const { cat_id } = params;
  const { id } = await params;
  // filter returns an array
  const events = allEvents.filter((e) => e.id == id);

  return <SingleEvent events={events}></SingleEvent>;
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
