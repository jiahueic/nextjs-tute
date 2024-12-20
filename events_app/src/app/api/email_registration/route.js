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
  const newAllEvents = allEvents.map((e) => {
    if (e.id == event_id) {
      if (e.emails_registered.includes(email)) {
        return new Response(
          JSON.stringify({
            error: "This email has already been registered",
          }),
          {
            status: 201, // Set the status code to 404
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      return { ...e, emails_registered: [...e.emails_registered, email] };
    }
    return e;
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify({ events_categories, allEvents: newAllEvents })
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
