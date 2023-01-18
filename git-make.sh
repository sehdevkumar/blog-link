#!/bin/bash

# navigate to the root of the git repository
cd $(git rev-parse --show-toplevel)


read -p "Do You want to add changes? (yes/no) " confirm

if [ "$confirm" == "y" ] || [ "$confirm" == "yes" ]; then
    # add all changes to the git index
    git add .
else
     exit
fi

read -p "Are you sure to commit the changes? (yes/no) " confirm2
read -p "Enter the Commit Message :" commitMsg

if [ "$confirm2" == "y" ] || [ "$confirm2" == "yes" ]; then
    # add all changes to the git index
   # commit changes with a message
     git commit -m "$commitMsg"

else
     exit
fi

# Pull

# push the commit to the remote repository
git push

git pull


