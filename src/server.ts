import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use((req, res, next) => {
  if (req.originalUrl === "/webhooks") {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use(cors({ origin: "https://barber-web-lovat.vercel.app/" }));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => console.log("Server Online"));
