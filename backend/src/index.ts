import { BunRequest } from "bun";
import { s3 } from "./services/s3";

type PreSignBodyType = {
  fileName: string;
};

const handlePreSign = async (req: BunRequest) => {
  const body = (await req.json()) as PreSignBodyType;
  if (!body || (body && !body.fileName)) {
    return Response.json(
      {
        message: "please provide a file-name",
      },
      {
        status: 400,
      },
    );
  }
  console.log(body.fileName);
  const url = s3.presign(`${Date.now()}-${body.fileName}`);
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
