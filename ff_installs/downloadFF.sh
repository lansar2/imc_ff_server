#!/bin/bash

while read i;

do

curl -O https://ftp.mozilla.org/pub/firefox/releases/$i/linux-x86_64/en-US/firefox-$i.tar.bz2

done <ff_releases.csv

