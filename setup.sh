#!/usr/bin/env bash

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

printf "Checking for required npm version...\n"
npm install -g npm > /dev/null 2>&1
printf "Completed.\n\n"

set -eEo pipefail

if [ ! -z "$CLOUD_SHELL" ]
then
  printf "Setting up NVM...\n"
  export NVM_DIR="/usr/local/nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  printf "Completed.\n\n"
  
  printf "Updating nodeJS version...\n"
  nvm install --lts
  printf "Completed.\n\n"
fi

printf "Installing monolith dependencies...\n"
cd ./monolith
npm install
printf "Completed.\n\n"

printf "Installing microservices dependencies...\n"
cd ../microservices
npm install
printf "Completed.\n\n"

printf "Installing React app dependencies...\n"
cd ../react-app
npm install
printf "Completed.\n\n"

printf "Building React app and placing into sub projects...\n"
npm run build
printf "Completed.\n\n"

printf "Setup completed successfully!\n"

if [ ! -z "$CLOUD_SHELL" ]
then
  printf "\n"
  printf "###############################################################################\n"
  printf "#                                   NOTICE                                    #\n"
  printf "#                                                                             #\n"
  printf "# Make sure you have a compatible nodeJS version with the following command:  #\n"
  printf "#                                                                             #\n"
  printf "# nvm install --lts                                                           #\n"
  printf "#                                                                             #\n"
  printf "###############################################################################\n"
fi
