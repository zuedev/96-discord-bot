import check from "./check.js";

describe("check", () => {
  test("should throw an error if no stream is provided", () => {
    expect(check()).rejects.toThrow('Missing required parameter: "stream"');
  });

  test("should return false if the stream is offline", async () => {
    const result = await check("51vt");
    expect(result).toBe(false);
  });

  test("should return true if the stream is online", async () => {
    const result = await check("ironmouse");
    expect(result).toBe(true);
  });
});
