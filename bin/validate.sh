#!/bin/bash

echo "VALIDATE APP INSTALL IS SUCCESSFULL"

STATUS=`curl -sL -w "%{http_code}\\n" "http://localhost/health" -o /dev/null`
if [ "$STATUS" -ne "200" ]; then
    echo "Not healty"
    exit 1
fi
exit 0
