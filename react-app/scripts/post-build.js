const path = require("path");
const ncp = require("ncp");
const rimraf = require("rimraf");

if(process.argv.length < 4){
  console.error("Invalid arguments, two arguments are required <source> <destination>");
}

//const sourceFolder = path.join(__dirname, "..", "build");
//const destFolder = path.join(__dirname, "..", "..", "..", "monolith", "public");

const sourceFolder = process.argv[2];
const destFolder = process.argv[3];

console.log(`Deleting stale folder: ${destFolder}`);

rimraf(destFolder, err => {
  if (err) {
    console.log(`Failed to delete stale destination folder: ${destFolder}`);
    return;
  }
  console.log(`Deleted stale destination folder: ${destFolder}`);

  console.log(`Copying files from ${sourceFolder} to ${destFolder}`)

  ncp(sourceFolder, destFolder, err => {
    if (err) {
      return console.error(`Failed to copy ${sourceFolder} to ${destFolder}!`);
    }
    console.log(`Copied ${sourceFolder} to ${destFolder} successfully!`);
  });
});
