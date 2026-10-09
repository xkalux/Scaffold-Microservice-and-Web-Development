import { describe, expect, it } from "bun:test";
import { app } from "../src/app";

describe("health route", () => {
  it("returns the validated health response", async () => {
    const response = await app.handle(new Request("http://localhost/health"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
  });
});
