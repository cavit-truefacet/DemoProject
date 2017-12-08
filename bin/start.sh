#!/bin/bash

. ~/.nvm/nvm.sh

#forever start index.js
forever \
  --workingDir /www/myApp \
  --minUptime 1000 \
  --spinSleepTime 1000 \
  start /www/myApp/index.js
  
