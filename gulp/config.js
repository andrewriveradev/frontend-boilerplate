const path = require("path");
const root = path.join(__dirname, "../");
const src = path.join(root, "./src");

module.exports = {
  root,
  src,
  buildPath: path.join(root, "/build"),

  flags: {
    chromeFlags: ["--show-paint-rects"],
    output: "html",
  },
  
  copyDependencies: {
    dist: path.join(src, "local_modules"),
  }
};
