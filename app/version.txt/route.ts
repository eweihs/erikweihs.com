export const dynamic = "force-static";

// The deploy workflow sets RELEASE to the tag in prod and to the commit in dev,
// so /version.txt answers "what is running here?"
export function GET() {
  return new Response(`${process.env.RELEASE ?? "local"}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
