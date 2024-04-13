// src/index.ts
import * as path from "path";
var __dirname = "/Users/sudhanshuraheja/code/src/github.com/open-language/en-wordnet/src";
var enWordnet = new Map;
enWordnet.set("3.0", path.join(__dirname, "..", "database", "3.0"));
enWordnet.set("3.1", path.join(__dirname, "..", "database", "3.1"));
var src_default = enWordnet;
export {
  src_default as default
};
