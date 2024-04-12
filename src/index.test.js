// import enWordnet from './index'
const enWordnet = require("./index");

describe("Test if the package is usable", () => {
  test("Check path for both version exists", () => {
    expect(enWordnet.get("3.0")).toContain("en-wordnet/database/3.0");
    expect(enWordnet.get("3.1")).toContain("en-wordnet/database/3.1");
  });
});
