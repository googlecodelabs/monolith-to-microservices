/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
