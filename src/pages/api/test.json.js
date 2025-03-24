// src/pages/api/test.json.js
export async function GET() {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
