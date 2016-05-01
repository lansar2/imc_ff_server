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

with open('ff_releases.csv', 'wb') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(releases)


