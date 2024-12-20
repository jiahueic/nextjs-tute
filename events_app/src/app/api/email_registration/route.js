import path from "path";
import fs from "fs";
export async function POST(request) {
  const { email, event_id } = await request.json();
  // Access our data
  // extract our data
  // res 404 when there are no AllEvents
  // AllEvents - loop through them and identify the EventID
  // add the email into emails_registered - write on our data
  // only if the email doesn't exist
  // check the format of email is ok
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return new Response(
      JSON.stringify({
        error: "Events data not found",
      }),
      {
        status: 404, // Set the status code to 404
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // find the index of the event that matches the event name in the body
  const event_index = allEvents.findIndex((e) => e.id == event_id);
  const target_event = allEvents[event_index];
  const emails_registered = target_event.emails_registered;
  if (emails_registered.includes(email)) {
    return new Response(
      JSON.stringify({
        error: "This email has already been registered",
      }),
      {
        status: 409,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  var new_target_event = {
    ...target_event,
    emails_registered: [...target_event.emails_registered, email],
  };
  allEvents[event_index] = new_target_event;

  fs.writeFileSync(
    filePath,
    JSON.stringify({
      events_categories: events_categories,
      allEvents: allEvents,
    })
  );
  return new Response(
    JSON.stringify({
      message: `You have been registered successfully with the email: ${email}`,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

function buildPath() {
  return path.join(process.cwd(), "src", "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
