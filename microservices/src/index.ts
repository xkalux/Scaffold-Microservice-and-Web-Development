import { app } from "./app";

if (import.meta.main) {
  const port = Number(Bun.env.PORT ?? 3000);
  app.listen(port);
  console.log(`Microservices starter listening at http://localhost:${port}`);
}

export default app;
