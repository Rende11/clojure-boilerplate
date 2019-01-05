#!/bin/bash

if [$(find ./test -type f -exec joker --lint {} \; 2>&1 | wc -l) -ne 0 ]; then
    find ./test -type f -exec joker --lint {} \;
    exit 1
else
    echo "no errors found"
fi

