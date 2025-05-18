import { BunRequest } from "bun";
import { s3 } from "./services/s3";

const handlePreSign = async (req: BunRequest) => {
  const url = s3.presign("random-item");
  return Response.json({
    url: url,
  });
};

const server = Bun.serve({
  routes: {
    "/": new Response("OK"),
    "/pre-sign": {
      POST: handlePreSign,
    },
  },
});

console.log(
  `Server ${server.id} is running on ${server.hostname}:${server.port}`,
);
