import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        ANALYZE: z
            .enum(["true", "false"])
            .optional()
            .transform((value) => value === "true"),
        GITHUB_TOKEN:  z.string(),
        MONGODB_URI: z.string(),
        MONGODB_DB: z.string(),
        MONGODB_COLLECTION_INFO: z.string(),
        MONGODB_COLLECTION_PROJECTS: z.string(),
        MONGODB_COLLECTION_STACK: z.string(),
        MONGODB_COLLECTION_SOCIALS: z.string(),
    },
    client: {},
    runtimeEnv: {
        ANALYZE: process.env.ANALYZE,
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DB: process.env.MONGODB_DB,
        MONGODB_COLLECTION_INFO: process.env.MONGODB_COLLECTION_INFO,
        MONGODB_COLLECTION_PROJECTS: process.env.MONGODB_COLLECTION_PROJECTS,
        MONGODB_COLLECTION_STACK: process.env.MONGODB_COLLECTION_STACK,
        MONGODB_COLLECTION_SOCIALS: process.env.MONGODB_COLLECTION_SOCIALS,
    },
})
