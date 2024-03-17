import cors from "cors";
import express from "express";

import { appRouter } from "./router";
import { createContext } from "./context";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000);

export type AppRouter = typeof appRouter;
