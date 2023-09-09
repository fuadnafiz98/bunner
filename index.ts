const server = Bun.serve({
  development: true,
  port: 8888,
  hostname: "0.0.0.0",
  lowMemoryMode: false,
  fetch(request, server) {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    console.log(url.pathname, searchParams.get("username"));
    return new Response("hello world!");
  },
});

console.log(
  `server #${server.id} is running on http://${server.hostname}:${server.port}`,
);
