// app/api/hello/route.js
export async function GET(request) {
  return new Response(JSON.stringify({ name: "Jia Huei Cheah" }), {
    headers: { "Content-Type": "application/json" },
  });
}
