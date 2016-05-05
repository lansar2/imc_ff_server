import csv
from collections import defaultdict
from dateutil.parser import parse
import json
from itertools import zip_longest
from os import listdir
import sys

infile = 'versions-and-dates.csv'
report_dir = 'posts/'

# read the output of a google doc populated using:
# =IMPORTHTML("https://en.wikipedia.org/wiki/Firefox_release_history","table",4)
# (then export as csv)

'''
Finding the right date for a feature family:
the right date is the date of introduction of its most popular feature.

inputs: dict of (version number, release date) pairs

need to build: (feature, version number) pairs for each feature
also (feature family, most popular feature) pairs
for features which had ties, prefer the earlier one (important for zero use features)

'''

def log(x):
  # pass
  print(x,file=sys.stderr)

# key,value of (firefox version number, release date in mm/dd/yyyy
release_dates = {}

# key, value of (feature name, feature info dict)
feature_info = {}

# key, value of (feature family name, most popular feature in that family
most_popular_feature = {}

# key, value of (feature name, earliest ffx version)
earliest_version = {}

with open(infile) as f:
  csvfile = csv.reader(f)
  first = True
  for line in csvfile:
    if first:
      first = False
      continue
    release_dates[line[2]] = parse(line[4])

'''
"abbreviation","standard_id","name","feature_id","count"
'''
infile = "standards_features_counts.csv"

with open(infile) as f:
  csvfile = csv.reader(f)
  # count of currently most popular feature
  for line in csvfile:
    family, family_id, feature, feature_id, count = line
    feature_info[feature] = {'feature':feature,'family_id':family_id,'family':family,
                             'feature_id':feature_id,'count':count}

  families = set(map(lambda x: x['family'], feature_info.values()))
  # log(families)
  for feature,info in feature_info.items():
    this_fam = info['family']
    if this_fam not in most_popular_feature:
      # log("adding new fam top feature: {}".format(this_fam))
      most_popular_feature[this_fam] = info
    else:
      if int(info['count']) > int(most_popular_feature[this_fam]['count']):
        # log("replacing {} with {}".format(
        #   most_popular_feature[this_fam],info))
        most_popular_feature[this_fam] = info
  for fam in families:
    if fam not in most_popular_feature:
      log("{} not represented in most pop.".format(fam))


def compare_version_numbers(first,second):
  comps = list(zip_longest(map(int,first.split('.')),map(int,second.split('.'))))
  while len(comps) > 0:
    tocomp = comps.pop(0)
    if tocomp[0] == None or tocomp[0] < tocomp[1]:
      return -1
    elif tocomp[1] == None or tocomp[1] < tocomp[0]:
      return 1
  return 0

def test_compare_version_numbers():
  pairs = (("1.2.3","2.3.4"),("1.2.3","1.2"),("3.2.1","3.2.10"),("40.2.3","40.2.3"))

  for item in pairs:
    retval = compare_version_numbers(item[1],item[0])
    if retval < 0:
      out = "is less than"
    elif retval > 0:
      out = "is greater than"
    else:
      out = "is equal to"
    print("{} {} {}".format(item[1],out,item[0]))

# test_compare_version_numbers()


def read_version_report(filename):
  version = filename.replace('.txt','',1)
  with open(report_dir + "/" + filename) as f:
    report = json.loads(f.read())
    for k,v in report.items():
      if v:
        if k not in earliest_version:
          # log("found new feature: {} in firefox {}".format(k,version))
          earliest_version[k] = version
        else:
          # new number is less than old number 
          if compare_version_numbers(version,earliest_version[k]) < 0:
            # log("{} in version {} is older than previous oldest {}.".format(k,version,
            #   earliest_version[k]))
            earliest_version[k] = version


for infile in listdir(report_dir):
  version = infile.replace('.txt','',1)
  if version not in release_dates:
    pass 
    # log("missing release date for {}.".format(version))
  else:
    # rvr saves its state to earliest_version
    read_version_report(infile)
'''
print(release_dates)
print(feature_info)
print(most_popular_feature)
print(earliest_version)
'''

for k,v in most_popular_feature.items():
  feat = v['feature']
  if feat not in earliest_version:
    log("couldn't find {}'s earliest version".format(feat))
    continue
  else:
    ev = earliest_version[feat]
  if ev not in release_dates:
    log("couldn't find {} in release dates".format(ev))
    continue
  else:
    # final output: (family, date)
    # for fam in most_popular_feature.
    print("{},{}".format(k,release_dates[ev]))

