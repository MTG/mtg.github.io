import requests
import codecs
import os

ignore = ["cmbrowser-orig", "freesound-design", "SLVision"]

def write(repo):
    name = repo["name"]
    desc = repo["description"]
    url = repo["html_url"]
    fname = "_projects/%s.markdown" % name
    if not os.path.exists(fname) and name not in ignore:
        with codecs.open(fname, "w", "utf-8") as fp:
            fp.write(u"""---
layout: project
name: "%s"
description: "%s"
ghurl: "%s"
---
""" % (name, desc, url))

def main():
    r = requests.get("https://api.github.com/orgs/MTG/repos")
    j = r.json()
    for repo in j:
        if repo["fork"]:
            continue
        write(repo)

if __name__ == "__main__":
    main()
