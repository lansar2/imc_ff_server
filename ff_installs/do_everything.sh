#!/bin/bash

while read i:
do

wget http://ftp.mozilla.org/pub/firefox/releases/$i/linux-i686/en-US/firefox-$i.tar.gz || echo $i >> ff_releases_remaining.txt

tar xvzf firefox-$i.tar.gz

rm firefox-$i.tar.gz

filename="firefox-$i.tar.gz"

no_extension=${filename%.tar.gz}

mv firefox ${no_extension}

cd ./${no_extension}

./firefox --url "http://192.168.56.1:5000/version?report=${no_extension}"

cd ../

rm -rf ${no_extension}

done < ff_releases_dd.txt


