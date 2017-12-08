#!/bin/bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6.12.2
nvm use 6.12.2
npm i -g strongloop
