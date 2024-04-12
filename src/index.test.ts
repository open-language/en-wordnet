import { test, expect } from "bun:test";
import enWordnet from './index'

test("Check path for both version exists", () => {
  expect(enWordnet.get("3.0")).toContain("en-wordnet/database/3.0");
  expect(enWordnet.get("3.1")).toContain("en-wordnet/database/3.1");
});

