const path = require("path");
const ncp = require("ncp");
const rimraf = require("rimraf");

const sourceFolder = path.join(__dirname, "..", "build");
const destFolder = path.join(__dirname, "..", "..", "..", "monolith", "public");

rimraf(destFolder, err => {
  if (err) {
    return console.error("Failed to delete destination folder!");
  }
  console.log("Deleted destination folder...");

  ncp(sourceFolder, destFolder, err => {
    if (err) {
      return console.error("Failed to copy build to monolith app!");
    }
    console.log("Copied source to destination successfully!");
    console.log("Post build complete!");
  });
});
