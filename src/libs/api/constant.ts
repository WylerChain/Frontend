export const API_VERSIONS = {
  v1: "v1",
} as const;
export type ApiVersion = (typeof API_VERSIONS)[keyof typeof API_VERSIONS];

export const DEFAULT_API_URL = process.env.NEXT_PUBLIC_API_URL;
