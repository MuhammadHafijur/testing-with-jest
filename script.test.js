const googleSearch = require("./script");

dbMock = ["bird.com", "cheesepuff.com", "rajshahi.com", "birdpictures.com"];

describe("googleSearch", () => {
  it("is a dummy test", () => {
    expect("hello").toBe("hello");
    //   googleSearch("testtest", dbMock);
  });

  it("it is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("bird", dbMock)).toEqual([
      "bird.com",
      "birdpictures.com",
    ]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
