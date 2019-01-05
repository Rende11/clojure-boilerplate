#!/bin/bash

find ./src -type f -exec joker --lint {} \; &> log

if [$(cat log | wc -l) -ne 0 ]; then
    cat log
    exit 1
else
    echo "no errors found"
fi

