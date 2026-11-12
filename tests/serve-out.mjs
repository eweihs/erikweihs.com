// Serves the static export the way CloudFront does: a file as it is, a clean URL from its
// .html file, and 404.html with a 404 status for anything else.
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(import.meta.dirname, "..", "out");
const port = Number(process.argv[2] ?? 4173);

const types = {
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

async function read(path) {
  try {
    return await readFile(join(root, path));
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") return null;
    throw error;
  }
}

createServer(async (request, response) => {
  const path = normalize(decodeURIComponent(new URL(request.url, "http://localhost").pathname));
  for (const candidate of [path, `${path}.html`, join(path, "index.html")]) {
    const body = await read(candidate);
    if (body) {
      response.writeHead(200, { "content-type": types[extname(candidate)] ?? "image/png" });
      response.end(body);
      return;
    }
  }
  response.writeHead(404, { "content-type": types[".html"] });
  response.end(await read("404.html"));
}).listen(port);
