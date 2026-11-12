// Serves the static export the way CloudFront does. The rewrite copies the viewer-request
// function in lib/frontend-stack.ts in the infra repo; a missing file gets 404.html.
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

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

const imageRoutes = ["/icon", "/opengraph-image", "/logo"];

function rewrite(uri) {
  if (imageRoutes.includes(uri)) return uri;
  if (uri.endsWith("/")) return `${uri}index.html`;
  if (!uri.slice(uri.lastIndexOf("/")).includes(".")) return `${uri}/index.html`;
  return uri;
}

async function read(path) {
  try {
    return await readFile(join(root, path));
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") return null;
    throw error;
  }
}

createServer(async (request, response) => {
  let path;
  try {
    path = rewrite(
      normalize(decodeURIComponent(new URL(request.url, "http://localhost").pathname)),
    );
  } catch (error) {
    if (!(error instanceof URIError)) throw error;
    response.writeHead(400);
    response.end();
    return;
  }
  // Never read outside out/, even for a path with encoded dots
  const body = resolve(root, `.${path}`).startsWith(root + sep) ? await read(path) : null;
  if (body) {
    response.writeHead(200, { "content-type": types[extname(path)] ?? "image/png" });
    response.end(body);
    return;
  }
  response.writeHead(404, { "content-type": types[".html"] });
  response.end(await read("404.html"));
}).listen(port);
