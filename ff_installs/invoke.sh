#!/bin/bash

for i in `seq 5 13`;

do

cd ./firefox$i.0

./firefox -safe-mode --url "http://localhost:5000/report?version=$i"

cd ~/Desktop/post_server/ff_installs

done

