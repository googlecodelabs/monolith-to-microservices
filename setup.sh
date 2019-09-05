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

echo "Installing dependencies for monolith application..."
cd ./monolith
npm install
echo "Completed."

echo "Installing microservies dependencies..."
cd ../microservices
npm install
echo "Completed."

echo "Installing React app dependencies..."
cd ./react-app
npm install
echo "Completed."

echo "Building React app and placing into sub projects..."
npm run build
echo "Completed."

echo "Script completed successfully!"