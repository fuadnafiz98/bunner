/*
const server = Bun.serve({
  development: true,
  port: 8888,
  hostname: "0.0.0.0",
  lowMemoryMode: false,
  fetch(request, server) {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    console.log(url.pathname, searchParams.get("username"));
    return new Response(
      JSON.stringify({
        message: "Hello Bun!",
      }),
    );
  },
});

console.log(
  `server #${server.id} is running on http://${server.hostname}:${server.port}`,
);
/**/

/*
const tcpServer = Bun.listen({
  hostname: "0.0.0.0",
  port: 9999,
  socket: {
    // socket opened
    open(socket) {
      console.log("====SOCKET OPEN====");
    },
    // message received from client
    data(socket, data) {
      console.log("========DATA=========");
    },
    // server ready for more data
    drain(socket) {
      console.log("==== WHAT DOES THIS DO?");
      console.log("DRAIN", socket);
    },
  },
});

console.log(`Server running on ${tcpServer.hostname}:${tcpServer.port}`);
/**/
