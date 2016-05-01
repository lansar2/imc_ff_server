#!/bin/bash

for i in `seq 4 46`;

do

tar xvjf firefox-$i.0.tar.bz2

mv firefox firefox$i.0

rm firefox-$i.0.tar.bz2

done

