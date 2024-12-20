import Head from "next/head";
import { HomePage } from "@/components/home/home-page";

export async function fetchEventsCatData() {
  const data = await import("../data/data.json");
  return data;
}
export default async function Home() {
  const data = await fetchEventsCatData();
  // console.log(data.events_categories);
  const events_categories = data.events_categories;
  return (
    <div>
      <Head>
        <title>Events App</title>
      </Head>
      <HomePage events_categories={events_categories}></HomePage>
    </div>
  );
}
