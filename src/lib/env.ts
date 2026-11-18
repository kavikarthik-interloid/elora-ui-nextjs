import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_BASE_URL: z.url(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.url(),
  },

  runtimeEnv: {
    API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  emptyStringAsUndefined: true,
});