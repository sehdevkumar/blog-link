#!/bin/bash

# # navigate to the root of the git repository
# cd $(git rev-parse --show-toplevel)

# add all changes to the git index
git add .

# commit changes with a message
git commit -m "Automatic commit from bash script"

# push the commit to the remote repository
git push
