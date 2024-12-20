export async function POST(request) {
  const { email, event_id } = await request.json();
  return new Response(
    JSON.stringify({
      message: `You have been registered successfully with the email: ${email}`,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
