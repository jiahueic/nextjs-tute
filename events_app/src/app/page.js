import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
export async function fetchEventsCatData() {
  const data = await import("../data/data.json");
  return data;
}
export default async function Home() {
  const data = await fetchEventsCatData();
  // console.log(data.events_categories);
  const events_categories = data.events_categories;
  return (
    <div className={styles.page}>
      <Head>
        <title>Events App</title>
      </Head>
      <header>
        <nav>
          <img></img>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Welcome to the Events App</h1>
        {events_categories.map((e) => (
          <a key={e.id} href={`events/${e.id}`}>
            <Image src={e.image} alt={e.title} width={200} height={200} />
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </a>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>
          © 2024 Events App. All rights reserved. Unauthorized use,
          distribution, or reproduction of this application or any part of its
          content, including text, graphics, and code, is strictly prohibited
          without prior written permission from Events App. All trademarks,
          logos, and brand names used herein are the property of their
          respective owners. For inquiries, please contact:
          [jiahueicheah87@example.com]
        </p>
      </footer>
    </div>
  );
}
