"use client"; // Add this at the top of the file
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SingleEvent = ({ events }) => {
  const inputEmail = useRef();
  const pathName = usePathname();
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(inputEmail);
    const emailValue = inputEmail.current.value;
    if (!emailValue.match(validRegex)) {
      // TO CONTINUE
      setMessage("Please introduce a correct email address");
    }
    const paths = pathName.split("/");
    const eventName = paths[paths.length - 1];
    try {
      const response = await fetch("/api/email_registration", {
        method: "POST", // Add HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          event_id: eventName,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("Registration failed");
      }
      // POST fetch request
      // body emailValue and eventid
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="event_single_page">
      {events.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <Image src={e.image} alt={e.title} width={500} height={500} />
          <p>{e.description}</p>
        </div>
      ))}
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get registered for this event</label>
        <input
          // type="email"
          id="email"
          ref={inputEmail}
          placeholder="Please insert your email here"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
