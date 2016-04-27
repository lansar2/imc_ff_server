#!/usr/bin/python
#
# Serving up static html w/ flask on localhost -- save POSTed features list.
#
import os.path
from flask import Flask, url_for, render_template, send_from_directory, request

app = Flask(__name__)

@app.route('/report', methods = ['GET','POST'])
def handle_requests():
    if request.method == 'POST':
        ff_version = request.args.get('version', '') #get ff version value
        try:
            features_data = request.form['features']
        except KeyError:
            raise RuntimeError('No heading found.')

        filename = ff_version + '.txt'
        filepath = './posts/' + filename
        writefile = open(filepath, 'w')
        writefile.write(features_data)
        writefile.close()

    return render_template('base.html')

if __name__ == '__main__':
    app.run(debug=True)

