#!/bin/bash

# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
printf "Checking for required npm version..."
npm install -g npm > ~/monolith-to-microservices/logs/npm.txt 2>&1
printf "Completed.\n"

printf "Installing monolith dependencies..."
cd ./monolith
npm install > ~/monolith-to-microservices/logs/monolith.txt 2>&1
printf "Completed.\n"

printf "Installing microservies dependencies..."
cd ../microservices
npm install > ~/monolith-to-microservices/logs/microservices.txt 2>&1
printf "Completed.\n"

printf "Installing React app dependencies..."
cd ../react-app
npm install > ~/monolith-to-microservices/logs/react.txt 2>&1
printf "Completed.\n"

printf "Building React app and placing into sub projects..."
npm run build > ~/monolith-to-microservices/logs/build.txt 2>&1
printf "Completed.\n\n"

printf "Script completed successfully!\n"
