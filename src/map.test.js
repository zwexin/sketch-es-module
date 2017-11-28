import { map } from "./map";

describe("map", function() {
  it("should maintain array length", () => {
    const arr = [1, 2, 3];
    expect(map(arr, x => x * 2)).toHaveLength(arr.length);
  });
  it("should return an empty array when passed an empty array", () => {
    expect(map([], x => x * 2)).toEqual([]);
  });
});
