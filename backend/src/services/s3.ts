import { S3Client } from "bun";

export const s3 = new S3Client({
  accessKeyId: Bun.env.CLOUDFLARE_R2_accessKeyId,
  secretAccessKey: Bun.env.CLOUDFLARE_R2_secretAccessKey,
  endpoint: Bun.env.CLOUDFLARE_R2_endpoint,
  bucket: Bun.env.CLOUDFLARE_R2_bucket,
});
