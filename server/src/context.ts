import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  return {};
};

// add the authenticated user when there is a valid session token coming from the request.
