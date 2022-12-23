import request from "supertest";
import { string } from "yargs";
// import { number } from "yargs";

import app from "../../src/app";

describe("User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/users");
    
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id:expect.any(Number),
          title:expect.any(String),
          price:expect.any(Number),
          description:expect.any(String),
          category:expect.any(String),
          rating:expect.any(Object)
  })
      ])
    );
    expect(res.error).toBe(false)
    expect(res.status).toEqual(200)

  });
});