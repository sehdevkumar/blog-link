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

# commit changes with a message
git commit -m "Automatic commit from bash script"

# push the commit to the remote repository
git push
