#!/bin/bash

# Check current directory
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found in the current directory."
  exit 1
fi

# Get the current version from package.json
current_version=$(node -p "require('./package.json').version")

# Update the patch version to 1.0.1 using npm
npm version patch --no-git-tag-version

# Get the new version
new_version=$(node -p "require('./package.json').version")

# Commit the changes to Git
git add .
git commit -m "Bump version to $new_version"
git push origin main

git tag v$new_version
git commit -m "Release $new_version"
git push origin v$new_version

# Provide feedback
echo "Version updated to $new_version and changes pushed to Git."

