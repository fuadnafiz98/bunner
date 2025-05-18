declare module "bun" {
  interface Env {
    CLOUDFLARE_R2_accessKeyId: string;
    CLOUDFLARE_R2_secretAccessKey: string;
    CLOUDFLARE_R2_endpoint: string;
    CLOUDFLARE_R2_bucket: string;
  }
}
