#!/usr/bin/env python

from lxml import html
import requests
import csv
import re

page = requests.get('https://ftp.mozilla.org/pub/firefox/releases/')
tree = html.fromstring(page.content)

#create list of stable releases
rel = tree.xpath("//a/text()")
rel1 = [i.translate(None, "/") for i in rel]
releases = [j for j in rel1 if not re.search(r'[a-zA-Z]', j) and j != '..'] 

writefile = open('ff_releases.txt', 'wb')
for k in releases:
    writefile.write("%s\n" % k)

writefile.close()    



