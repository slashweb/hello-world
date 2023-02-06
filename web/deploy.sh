#!/bin/bash

cd ./build
FILES=$(find * -type f | awk -v q="'" '{print " -F " q "file=@\"" $0 "\";filename=\"" $0 "\"" q}')
curl "https://ipfs.infura.io:5001/api/v0/add?pin=true&recursive=true&wrap-with-directory=true&cid-version=1" -vv -X POST $FILES -u "2LMG4TC7ioCYRWut78xkfUBhhVT:65b9982aacbc66b5c60b96e7a4e69eae"
cd ..
