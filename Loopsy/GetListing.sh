#!/bin/bash

ls media | sed 's/^/"/' | sed 's/$/",/' | tr -d '\n' > LatestListing.txt
