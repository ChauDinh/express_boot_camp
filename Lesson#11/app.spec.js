const app = require("./app");
const request = require("supertest");

describe('Middleware', () => {
  it("returns one foo", async () => {
   const res = await request(app).get("/").expect(200);
   expect(res.body).toEqual({ foo: 1 });
  });

  it("returns two foo", async () => {
   const res = await request(app).get("/?foo=1").expect(200);
   expect(res.body).toEqual({ foo: 2 });
  });

  it("rejects a user who has not token", async () => {
   const res = await request(app).delete("/users/bob").expect(200);
   expect(res.body).toEqual({ message: "No token"});
  });
  
  
})
